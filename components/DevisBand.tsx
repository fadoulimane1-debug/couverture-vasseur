import { business } from '@/lib/site';
import DevisForm from './DevisForm';
import PhoneLink from './PhoneLink';

/**
 * Bloc devis réel, repris tel quel en haut et en bas des pages.
 * « Devis gratuit sous 48 h » + rappel téléphonique + formulaire.
 */
export default function DevisBand({
  id = 'devis',
  title = 'Décrire le toit, on vient le mesurer',
  intro = 'Vous racontez ce que vous voyez ; Julien monte le vérifier, relève les cotes et rédige un devis lisible, ligne par ligne, sans rien vous engager.',
}: {
  id?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-y border-nuit/10 bg-papier">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1.15fr] md:px-8 md:py-20">
        <div>
          <p className="cartouche">Devis gratuit sous 48 h</p>
          <h2 className="mt-3 text-nuit">{title}</h2>
          <p className="mt-4 max-w-prose2 text-nuit/70">{intro}</p>

          <dl className="mt-8 grid gap-4 font-mono text-[0.8rem] text-nuit/70">
            <div className="flex gap-3">
              <dt className="text-encre">48 h</dt>
              <dd>délai de réponse à toute demande</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-encre">24–48 h</dt>
              <dd>mise hors d’eau en cas de fuite active</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-encre">0 €</dt>
              <dd>visite, métré et devis</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <PhoneLink />
            <a
              href={`mailto:${business.email}`}
              className="inline-flex items-center rounded-[2px] border border-encre/40 px-5 py-3 font-mono text-[0.78rem] uppercase tracking-label text-encre hover:bg-encre/10"
            >
              {business.email}
            </a>
          </div>
        </div>

        <div className="rounded-[4px] border border-nuit/12 bg-white p-6 md:p-8 shadow-[0_12px_44px_-26px_rgba(12,19,28,0.22)]">
          <DevisForm />
        </div>
      </div>
    </section>
  );
}
