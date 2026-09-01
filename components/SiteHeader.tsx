import Link from 'next/link';
import Image from 'next/image';
import { business } from '@/lib/site';
import PhoneLink from './PhoneLink';

const nav = [
  { href: '/#prestations', label: 'Prestations' },
  { href: '/refection-toiture-ardoise-angers', label: 'Réfection ardoise' },
  { href: '/couvreur-angers', label: 'Angers' },
  { href: '/#zone', label: 'Zone' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-nuit/10 bg-fond/90 backdrop-blur supports-[backdrop-filter]:bg-fond/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="inline-flex" aria-label="Couverture Vasseur — accueil">
          <Image
            src="/logo-couverture-vasseur.png"
            alt="Couverture Vasseur, artisan couvreur zingueur à Angers"
            width={1347}
            height={650}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <div className="flex items-center gap-3 md:gap-5">
          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-6 font-mono text-[0.72rem] uppercase tracking-label text-nuit/70">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-encre">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span className="hidden sm:block">
            <PhoneLink variant="ghost" />
          </span>
          <a
            href={business.phoneHref}
            className="rounded-[2px] border border-encre/40 p-2 text-encre sm:hidden"
            aria-label={`Appeler Couverture Vasseur au ${business.phoneDisplay}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 5c0-1 1-2 2-2h2l2 5-2 1c1 3 3 5 6 6l1-2 5 2v2c0 1-1 2-2 2A16 16 0 0 1 4 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </a>
          <Link
            href="/#devis"
            className="rounded-[2px] bg-encre px-4 py-2.5 font-mono text-[0.72rem] uppercase tracking-label text-white hover:bg-encre-fonce"
          >
            Devis
          </Link>
        </div>
      </div>
    </header>
  );
}
