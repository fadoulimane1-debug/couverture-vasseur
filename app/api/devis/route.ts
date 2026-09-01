import { NextResponse } from 'next/server';
import { business } from '@/lib/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Payload = Record<string, string>;

function clean(v: unknown): string {
  return String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, 2000);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: 'Requête illisible.' }, { status: 400 });
  }

  // Pot de miel : un bot remplit ce champ, un humain ne le voit pas.
  if (clean(body.entreprise)) {
    return NextResponse.json({ ok: true });
  }

  const nom = clean(body.nom);
  const telephone = clean(body.telephone);
  if (!nom || !telephone) {
    return NextResponse.json(
      { error: 'Merci d’indiquer au moins un nom et un téléphone.' },
      { status: 422 },
    );
  }

  const demande = {
    nom,
    telephone,
    email: clean(body.email),
    commune: clean(body.commune),
    prestation: clean(body.prestation),
    message: clean(body.message),
    recu_le: new Date().toISOString(),
  };

  const to = process.env.DEVIS_TO_EMAIL || business.email;
  const from = process.env.DEVIS_FROM_EMAIL || 'site@couverture-vasseur.fr';
  const key = process.env.RESEND_API_KEY;

  if (key) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${key}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `Couverture Vasseur <${from}>`,
          to: [to],
          reply_to: demande.email || undefined,
          subject: `Devis — ${demande.prestation || 'demande'} à ${demande.commune || 'préciser'} (${demande.nom})`,
          text: [
            `Nouvelle demande de devis reçue depuis le site.`,
            ``,
            `Nom       : ${demande.nom}`,
            `Téléphone : ${demande.telephone}`,
            `E-mail    : ${demande.email || '—'}`,
            `Commune   : ${demande.commune || '—'}`,
            `Travaux   : ${demande.prestation || '—'}`,
            ``,
            `Message :`,
            demande.message || '—',
            ``,
            `Reçu le ${demande.recu_le}`,
          ].join('\n'),
        }),
      });
      if (!res.ok) throw new Error(`Resend ${res.status}`);
    } catch (err) {
      console.error('[devis] envoi e-mail impossible :', err, demande);
      return NextResponse.json(
        { error: 'Envoi impossible pour le moment.' },
        { status: 502 },
      );
    }
  } else {
    // Pas de clé configurée : on trace la demande, le site reste fonctionnel.
    console.log('[devis] nouvelle demande (e-mail non configuré) :', demande);
  }

  return NextResponse.json({ ok: true });
}
