import { business } from '@/lib/site';

type Props = {
  variant?: 'button' | 'inline' | 'ghost';
  className?: string;
  label?: string;
};

/** Lien téléphonique cliquable (href="tel:") réutilisé sur toutes les pages. */
export default function PhoneLink({ variant = 'button', className = '', label }: Props) {
  const base =
    'inline-flex items-center gap-2 font-mono tracking-label uppercase text-[0.78rem] transition-colors';
  const styles = {
    button:
      'rounded-[2px] bg-encre px-5 py-3 text-white hover:bg-ciel hover:text-nuit',
    ghost:
      'rounded-[2px] border border-ciel/40 px-5 py-3 text-ciel hover:border-ciel hover:bg-ciel/10',
    inline: 'underline underline-offset-4 decoration-1 hover:text-ciel',
  }[variant];

  return (
    <a href={business.phoneHref} className={`${base} ${styles} ${className}`} data-cta="tel">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 5c0-1 1-2 2-2h2l2 5-2 1c1 3 3 5 6 6l1-2 5 2v2c0 1-1 2-2 2A16 16 0 0 1 4 5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
      {label ?? business.phoneDisplay}
    </a>
  );
}
