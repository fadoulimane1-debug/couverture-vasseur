'use client';

import { useState } from 'react';
import { business, communes, prestations } from '@/lib/site';

type State = 'idle' | 'sending' | 'ok' | 'error';

export default function DevisForm() {
  const [state, setState] = useState<State>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (data.entreprise) return; // pot de miel anti-spam

    setState('sending');
    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setState('ok');
      setMessage(
        `Demande envoyée. ${business.founderFirstName} vous rappelle sous 48 h ouvrées pour convenir de la visite.`,
      );
      form.reset();
    } catch {
      setState('error');
      setMessage(
        `L’envoi n’a pas abouti. Appelez le ${business.phoneDisplay} ou écrivez à ${business.email}, nous traitons votre demande directement.`,
      );
    }
  }

  if (state === 'ok') {
    return (
      <div className="rounded-[4px] border border-ciel/40 bg-ciel/10 p-6">
        <p className="font-mono text-[0.72rem] uppercase tracking-label text-ciel">
          Demande reçue
        </p>
        <p className="mt-3 text-papier/85">{message}</p>
        <p className="mt-4 text-sm text-papier/60">
          Besoin d’une réponse tout de suite ?{' '}
          <a href={business.phoneHref} className="text-ciel underline underline-offset-2">
            {business.phoneDisplay}
          </a>
        </p>
      </div>
    );
  }

  const field =
    'w-full rounded-[2px] border border-ciel/25 bg-nuit px-3 py-2.5 text-papier placeholder:text-papier/35 focus:border-ciel focus:outline-none';
  const labelCls = 'block font-mono text-[0.68rem] uppercase tracking-label text-ciel/85';

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <p className="hidden" aria-hidden="true">
        <label>
          Ne pas remplir
          <input type="text" name="entreprise" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="nom">
            Nom
          </label>
          <input id="nom" name="nom" required autoComplete="name" className={`mt-1.5 ${field}`} />
        </div>
        <div>
          <label className={labelCls} htmlFor="telephone">
            Téléphone
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            className={`mt-1.5 ${field}`}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="email">
            E-mail
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={`mt-1.5 ${field}`} />
        </div>
        <div>
          <label className={labelCls} htmlFor="commune">
            Commune du chantier
          </label>
          <select id="commune" name="commune" required className={`mt-1.5 ${field}`} defaultValue="">
            <option value="" disabled>
              Choisir…
            </option>
            {communes.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Autre commune du 49">Autre commune (49)</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="prestation">
          Nature des travaux
        </label>
        <select id="prestation" name="prestation" required className={`mt-1.5 ${field}`} defaultValue="">
          <option value="" disabled>
            Choisir…
          </option>
          {prestations.map((p) => (
            <option key={p.slug} value={p.titre}>
              {p.titre}
            </option>
          ))}
          <option value="Recherche de fuite urgente">Fuite active — urgent</option>
          <option value="Je ne sais pas encore">Je ne sais pas encore</option>
        </select>
      </div>

      <div>
        <label className={labelCls} htmlFor="message">
          Votre situation en quelques lignes
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`mt-1.5 ${field}`}
          placeholder="Type de bâtiment, ce que vous constatez, surface approximative, présence d’un ravalement ou d’une copropriété…"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-papier/70">
        <input type="checkbox" name="consentement" required className="mt-1" />
        <span>
          J’accepte que ces informations soient utilisées pour me recontacter au
          sujet de ma demande de devis.
        </span>
      </label>

      {state === 'error' ? (
        <p role="alert" className="rounded-[2px] border border-laiton/50 bg-laiton/10 p-3 text-sm text-papier/85">
          {message}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === 'sending'}
          className="rounded-[2px] bg-encre px-6 py-3 font-mono text-[0.75rem] uppercase tracking-label text-white transition-colors hover:bg-ciel hover:text-nuit disabled:opacity-60"
        >
          {state === 'sending' ? 'Envoi…' : 'Envoyer la demande'}
        </button>
        <span className="text-sm text-papier/55">
          ou appelez le{' '}
          <a href={business.phoneHref} className="text-ciel underline underline-offset-2">
            {business.phoneDisplay}
          </a>
        </span>
      </div>
      <p className="text-xs text-papier/40">
        Réponse sous 48 h ouvrées. Déplacement et devis gratuits dans toute la zone
        d’intervention.
      </p>
    </form>
  );
}
