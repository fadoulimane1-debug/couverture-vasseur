import Link from 'next/link';
import Image from 'next/image';
import PhoneLink from './PhoneLink';

const nav = [
  { href: '/#prestations', label: 'Prestations' },
  { href: '/refection-toiture-ardoise-angers', label: 'Réfection ardoise' },
  { href: '/couvreur-angers', label: 'Angers' },
  { href: '/#zone', label: 'Zone' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-nuit/10 bg-fond/90 backdrop-blur supports-[backdrop-filter]:bg-fond/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="inline-flex shrink-0" aria-label="Couverture Vasseur — accueil">
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

          {/* Téléphone : même poids visuel que le bouton Devis, dès sm. */}
          <span className="hidden sm:block">
            <PhoneLink variant="ghost" />
          </span>

          <Link
            href="/#devis"
            className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-encre px-5 py-3 font-mono text-[0.78rem] uppercase tracking-label text-white shadow-[0_6px_16px_-8px_rgba(0,97,198,0.7)] transition-all duration-150 hover:-translate-y-px hover:bg-encre-fonce hover:shadow-[0_10px_22px_-8px_rgba(0,97,198,0.75)] active:translate-y-0"
          >
            Devis<span className="hidden sm:inline">&nbsp;gratuit</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
