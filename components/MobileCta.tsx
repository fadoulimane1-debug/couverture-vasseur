import Link from 'next/link';
import { business } from '@/lib/site';

/**
 * Barre d'action fixe en bas d'écran sur mobile : appel et devis au même
 * poids visuel, toujours accessibles. Masquée à partir de sm.
 */
export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-nuit/15 bg-fond/95 backdrop-blur sm:hidden">
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2 border-r border-nuit/15 px-3 py-3.5 font-mono text-[0.8rem] uppercase tracking-label text-encre"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 5c0-1 1-2 2-2h2l2 5-2 1c1 3 3 5 6 6l1-2 5 2v2c0 1-1 2-2 2A16 16 0 0 1 4 5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
        Appeler
      </a>
      <Link
        href="/#devis"
        className="flex items-center justify-center gap-2 bg-encre px-3 py-3.5 font-mono text-[0.8rem] uppercase tracking-label text-white"
      >
        Devis gratuit
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
