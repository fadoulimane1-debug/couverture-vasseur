'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
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
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Referme le menu mobile après une navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

          {/* Menu mobile / tablette — masqué à partir de lg. */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-nuit/20 text-nuit lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Panneau du menu mobile */}
      <nav
        id="menu-mobile"
        aria-label="Navigation"
        hidden={!open}
        className="border-t border-nuit/10 bg-fond/95 backdrop-blur lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3 font-mono text-[0.8rem] uppercase tracking-label text-nuit/75 md:px-8">
          {nav.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 hover:text-encre"
              >
                {n.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <PhoneLink variant="ghost" className="w-full" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
