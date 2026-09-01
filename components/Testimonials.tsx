import { temoignages } from '@/lib/site';

function Stars({ note }: { note: number }) {
  const full = Math.floor(note);
  const half = note - full >= 0.5;
  return (
    <span
      className="inline-flex items-center gap-0.5 text-encre"
      aria-label={`Note : ${note.toString().replace('.', ',')} sur 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const state = i < full ? 'full' : i === full && half ? 'half' : 'empty';
        return (
          <svg key={i} width="15" height="15" viewBox="0 0 20 20" aria-hidden="true">
            <defs>
              <linearGradient id={`h${i}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 15l-5.3 2.6 1-5.8L1.5 7.7l5.9-.9z"
              fill={state === 'full' ? 'currentColor' : state === 'half' ? `url(#h${i})` : 'none'}
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        );
      })}
    </span>
  );
}

export default function Testimonials() {
  return (
    <div className="mt-10">
      <p className="cartouche">Ce que les clients écrivent</p>
      <div className="mt-4 grid gap-px overflow-hidden rounded-[3px] border border-nuit/12 bg-nuit/12 md:grid-cols-3">
        {temoignages.map((t) => (
          <figure key={t.nom} className="flex flex-col gap-3 bg-white p-6">
            <Stars note={t.note} />
            <blockquote className="text-[0.95rem] leading-relaxed text-nuit/80">
              « {t.texte} »
            </blockquote>
            <figcaption className="mt-auto border-t border-nuit/10 pt-3 text-sm">
              <span className="font-semibold text-nuit">{t.nom}</span>
              <span className="text-nuit/60"> — {t.ville}</span>
              <span className="mt-1 block font-mono text-[0.68rem] uppercase tracking-label text-encre">
                {t.chantier}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
