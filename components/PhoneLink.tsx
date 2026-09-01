import { business } from '@/lib/site';

type Props = {
  variant?: 'button' | 'inline' | 'ghost';
  className?: string;
  label?: string;
};

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 5c0-1 1-2 2-2h2l2 5-2 1c1 3 3 5 6 6l1-2 5 2v2c0 1-1 2-2 2A16 16 0 0 1 4 5Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Lien téléphonique cliquable (href="tel:") — même gabarit que le bouton
 * « Devis » pour un poids visuel équivalent. Micro-animation au survol.
 */
export default function PhoneLink({ variant = 'button', className = '', label }: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 font-mono tracking-label uppercase text-[0.78rem] rounded-[2px] transition-all duration-150 will-change-transform';
  const styles = {
    button:
      'bg-encre px-5 py-3 text-white shadow-[0_6px_16px_-8px_rgba(0,97,198,0.7)] hover:bg-encre-fonce hover:-translate-y-px hover:shadow-[0_10px_22px_-8px_rgba(0,97,198,0.75)] active:translate-y-0',
    ghost:
      'border-2 border-encre px-[1.15rem] py-[0.65rem] text-encre hover:bg-encre hover:text-white hover:-translate-y-px',
    inline: 'underline underline-offset-4 decoration-1 hover:text-encre',
  }[variant];

  return (
    <a href={business.phoneHref} className={`${base} ${styles} ${className}`} data-cta="tel">
      <PhoneIcon />
      {label ?? business.phoneDisplay}
    </a>
  );
}
