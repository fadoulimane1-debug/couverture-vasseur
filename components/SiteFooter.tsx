import Link from 'next/link';
import { business, communes, prestations, primaryPrestationSlug } from '@/lib/site';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ciel/15 bg-nuit-2">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-lg text-papier">Couverture Vasseur</p>
            <p className="mt-2 text-sm text-papier/65">
              {business.baseline}. {business.team}, {business.since}.
            </p>
            <address className="mt-4 not-italic text-sm text-papier/65">
              {business.address.street}
              <br />
              {business.address.postalCode} {business.address.city}
              <br />
              {business.hoursDisplay}
            </address>
          </div>

          <nav aria-label="Prestations">
            <p className="cartouche">Prestations</p>
            <ul className="mt-4 space-y-2 text-sm text-papier/70">
              {prestations.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={
                      p.slug === primaryPrestationSlug
                        ? `/${primaryPrestationSlug}`
                        : `/#prestations`
                    }
                    className="hover:text-ciel"
                  >
                    {p.titre}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Zone d’intervention">
            <p className="cartouche">Zone d’intervention</p>
            <ul className="mt-4 space-y-2 text-sm text-papier/70">
              {communes.map((c) => (
                <li key={c.name}>
                  <Link
                    href={c.name === 'Angers' ? '/couvreur-angers' : '/couvreur-angers#communes'}
                    className="hover:text-ciel"
                  >
                    Couvreur {c.name} ({c.cp})
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="cartouche">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-papier/70">
              <li>
                <a href={business.phoneHref} className="hover:text-ciel">
                  {business.phoneDisplay}
                </a>{' '}
                <span className="text-papier/40">— {business.founderFirstName}</span>
              </li>
              <li>
                <a href={business.phoneSecondaryHref} className="hover:text-ciel">
                  {business.phoneSecondaryDisplay}
                </a>{' '}
                <span className="text-papier/40">— atelier</span>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-ciel">
                  {business.email}
                </a>
              </li>
              <li>
                <Link href="/#devis" className="hover:text-ciel">
                  Demander un devis gratuit
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-ciel">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-12 pt-6 text-xs text-papier/45">
          <p>
            {business.trust.qualibat} · {business.trust.decennale}.
          </p>
          <p className="mt-2">
            © {year} Couverture Vasseur — {business.legalName}. Couvreur zingueur à
            Angers et dans le Maine-et-Loire (49).
          </p>
        </div>
      </div>
    </footer>
  );
}
