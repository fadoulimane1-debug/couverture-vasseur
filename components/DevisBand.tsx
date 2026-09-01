import { business } from '@/lib/site';
import DevisForm from './DevisForm';
import PhoneLink from './PhoneLink';

/**
 * Bloc devis réel, repris tel quel en haut et en bas des pages.
 * « Devis gratuit sous 48 h » + rappel téléphonique + formulaire.
 */
export default function DevisBand({
  id = 'devis',
  title = 'Devis gratuit sous 48 h',
  intro = 'Décrivez votre toiture. Julien passe la voir, prend les mesures et vous remet un devis clair, ligne par ligne, sans engagement.',
}: {
  id?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-y border-ciel/15 bg-nuit-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1.15fr] md:px-8 md:py-20">
        <div>
          <p className="cartouche">Devis · déplacement gratuit</p>
          <h2 className="mt-3 text-3xl text-papier md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-prose2 text-papier/75">{intro}</p>

          <dl className="mt-8 grid gap-4 font-mono text-[0.8rem] text-papier/70">
            <div className="flex gap-3">
              <dt className="text-ciel">48 h</dt>
              <dd>délai de réponse à toute demande</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-ciel">24–48 h</dt>
              <dd>mise hors d’eau en cas de fuite active</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-ciel">0 €</dt>
              <dd>visite, métré et devis</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <PhoneLink />
            <a
              href={`mailto:${business.email}`}
              className="inline-flex items-center rounded-[2px] border border-ciel/40 px-5 py-3 font-mono text-[0.78rem] uppercase tracking-label text-ciel hover:bg-ciel/10"
            >
              {business.email}
            </a>
          </div>
        </div>

        <div className="rounded-[4px] border border-ciel/20 bg-nuit p-6 md:p-8">
          <DevisForm />
        </div>
      </div>
    </section>
  );
}
