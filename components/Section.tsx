import type { ReactNode } from 'react';

type Props = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  tone?: 'nuit' | 'panneau';
};

/**
 * Bloc de page avec cartouche (étiquette monospace) façon repère de plan.
 * Pas de numérotation : l'ordre des sections n'est pas une séquence.
 */
export default function Section({ id, eyebrow, title, intro, children, tone = 'nuit' }: Props) {
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
          <h2 className="text-balance text-3xl text-papier md:text-[2.6rem]">{title}</h2>
          {intro ? (
            <div className="mt-4 max-w-prose2 text-[1.05rem] text-papier/75">{intro}</div>
          ) : null}
          <div className={tone === 'panneau' ? 'mt-8' : 'mt-8'}>{children}</div>
        </div>
      </div>
    </section>
  );
}
