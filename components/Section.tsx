import type { ReactNode } from 'react';

type Props = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Rappel de réassurance discret (ex. ['Devis gratuit sous 48 h', 'Garantie décennale']). */
  note?: string[];
  children: ReactNode;
};

/**
 * Bloc de page avec cartouche (étiquette monospace) façon repère de plan.
 * Pas de numérotation : l'ordre des sections n'est pas une séquence.
 * L'échelle typographique H2/H3 est portée par globals.css.
 */
export default function Section({ id, eyebrow, title, intro, note, children }: Props) {
  return (
    <section
      id={id}
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:px-8 md:py-24"
    >
      <div className="hairline pt-8 md:grid md:grid-cols-[10rem_1fr] md:gap-10">
        <div className="mb-6 md:mb-0">
          <p className="cartouche">{eyebrow}</p>
        </div>
        <div>
          <h2 className="text-balance">{title}</h2>
          {intro ? (
            <div className="mt-4 max-w-prose2 text-[1.05rem] leading-relaxed text-nuit/70">
              {intro}
            </div>
          ) : null}
          {note && note.length ? (
            <p className="reassure">
              {note.map((n) => (
                <span key={n}>{n}</span>
              ))}
            </p>
          ) : null}
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
