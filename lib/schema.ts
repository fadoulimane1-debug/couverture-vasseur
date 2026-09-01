import { SITE_URL, business, communes, prestations } from './site';

const dayMap: Record<string, string> = {
  Monday: 'https://schema.org/Monday',
  Tuesday: 'https://schema.org/Tuesday',
  Wednesday: 'https://schema.org/Wednesday',
  Thursday: 'https://schema.org/Thursday',
  Friday: 'https://schema.org/Friday',
  Saturday: 'https://schema.org/Saturday',
  Sunday: 'https://schema.org/Sunday',
};

/** Fiche établissement complète : RoofingContractor. */
export function roofingContractorSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `${SITE_URL}/#entreprise`,
    name: business.name,
    legalName: business.legalName,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    logo: `${SITE_URL}/logo-couverture-vasseur.png`,
    telephone: '+33634521987',
    email: business.email,
    priceRange: business.priceRange,
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Chèque, Virement, Espèces',
    foundingDate: String(business.foundingYear),
    slogan: 'La toiture ancienne d’Angers, faite dans les règles de l’ardoise d’Anjou.',
    knowsLanguage: 'fr',
    founder: {
      '@type': 'Person',
      name: business.founderName,
      jobTitle: 'Couvreur zingueur, compagnon',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressRegion: business.address.department,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    hasMap: 'https://www.google.com/maps?q=12+rue+de+la+Meignanne+49000+Angers',
    areaServed: communes.map((c) => ({
      '@type': 'City',
      name: c.name,
      address: {
        '@type': 'PostalAddress',
        postalCode: c.cp,
        addressCountry: 'FR',
      },
    })),
    openingHoursSpecification: business.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days.map((d) => dayMap[d]),
      opens: h.open,
      closes: h.close,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.trust.rating,
      reviewCount: business.trust.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    makesOffer: prestations.map((p) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: p.titre,
        description: p.resume,
        serviceType: p.titre,
        areaServed: 'Angers et communes limitrophes (49)',
      },
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Prestations de couverture et zinguerie',
      itemListElement: prestations.map((p) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: p.titre,
          description: p.detail,
        },
      })),
    },
    sameAs: [business.social.google, business.social.facebook],
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: 'Réfection de toiture en ardoise',
    url: `${SITE_URL}${opts.path}`,
    areaServed: communes.map((c) => ({ '@type': 'City', name: c.name })),
    provider: { '@id': `${SITE_URL}/#entreprise` },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        description:
          'Sur devis après visite technique. Réfection complète en ardoise d’Anjou : 180 à 320 €/m² selon accès, pente et état de la charpente.',
      },
    },
  };
}
