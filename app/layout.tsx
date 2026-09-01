import type { Metadata } from 'next';
import { Fraunces, Inter, Space_Mono } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import MobileCta from '@/components/MobileCta';
import Jsonld from '@/components/Jsonld';
import { roofingContractorSchema } from '@/lib/schema';
import { SITE_URL, business } from '@/lib/site';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Couvreur Angers 49 — Rénovation toiture ardoise | Couverture Vasseur',
    template: '%s | Couverture Vasseur',
  },
  description:
    'Couvreur zingueur à Angers (49). Réfection de toiture en ardoise d’Anjou, recherche de fuite, zinguerie et démoussage. Artisan RGE Qualibat, garantie décennale, devis gratuit sous 48 h.',
  applicationName: 'Couverture Vasseur',
  authors: [{ name: business.founderName }],
  keywords: [
    'couvreur Angers',
    'couvreur zingueur Angers',
    'réfection toiture ardoise Angers',
    'ardoise d’Anjou',
    'recherche de fuite toiture Angers',
    'zinguerie Angers',
    'artisan couvreur 49',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Couverture Vasseur',
    url: SITE_URL,
    title: 'Couverture Vasseur — Couvreur zingueur à Angers (49)',
    description:
      'Artisan couvreur à Angers, spécialiste de l’ardoise d’Anjou et des toitures anciennes du centre historique. Devis gratuit sous 48 h.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'Construction',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[2px] focus:bg-encre focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        {/* pb-16 sur mobile : réserve la place de la barre d'action fixe */}
        <main id="contenu" className="pb-16 sm:pb-0">
          {children}
        </main>
        <SiteFooter />
        <MobileCta />
        <Jsonld data={roofingContractorSchema()} />
      </body>
    </html>
  );
}
