/**
 * Données de référence de l'entreprise.
 * Un seul endroit à modifier pour le téléphone, l'adresse, les chiffres de
 * confiance, la zone d'intervention et le catalogue de prestations.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://couverture-vasseur.fr';

export const business = {
  name: 'Couverture Vasseur',
  legalName: 'Couverture Vasseur — Julien Vasseur EI',
  baseline: 'Artisan couvreur zingueur à Angers',
  founderFirstName: 'Julien',
  founderName: 'Julien Vasseur',
  foundingYear: 2009,
  since: 'depuis 2009',
  yearsLabel: '17 ans de métier',
  team: 'Julien Vasseur et deux compagnons salariés',

  phoneDisplay: '06 34 52 19 87',
  phoneHref: 'tel:+33634521987',
  phoneSecondaryDisplay: '02 41 88 20 74',
  phoneSecondaryHref: 'tel:+33241882074',
  email: 'contact@couverture-vasseur.fr',

  address: {
    street: '12 rue de la Meignanne',
    postalCode: '49000',
    city: 'Angers',
    region: 'Pays de la Loire',
    department: 'Maine-et-Loire',
    departmentCode: '49',
    country: 'FR',
  },
  geo: { lat: 47.4784, lng: -0.5632 },

  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], open: '07:30', close: '18:30' },
    { days: ['Saturday'], open: '09:00', close: '12:00' },
  ],
  hoursDisplay: 'Lun–Ven 7 h 30 – 18 h 30 · Sam 9 h – 12 h',

  priceRange: '€€',

  trust: {
    rating: 4.9,
    reviewCount: 47,
    qualibat: 'RGE Qualibat 8621 — certificat n° 24-49-0837',
    decennale: 'Garantie décennale MMA — contrat n° 148 562 301',
    urgenceDelay: 'intervention de mise hors d’eau sous 24 à 48 h',
    freeQuote: 'Devis gratuit sous 48 h',
  },

  social: {
    google: 'https://www.google.com/maps',
    facebook: 'https://www.facebook.com',
  },
} as const;

/** Zone d'intervention — Angers + communes limitrophes. */
export const communes: { name: string; cp: string; note: string }[] = [
  { name: 'Angers', cp: '49000', note: 'centre historique, secteur sauvegardé, faubourgs' },
  { name: 'Avrillé', cp: '49240', note: 'pavillons des années 1960-80, ardoise et tuile' },
  { name: 'Beaucouzé', cp: '49070', note: 'lotissements récents et corps de ferme rénovés' },
  { name: 'Les Ponts-de-Cé', cp: '49130', note: 'maisons de bord de Loire, forte exposition au vent' },
  { name: 'Trélazé', cp: '49800', note: 'cité ardoisière, patrimoine ouvrier en ardoise' },
  { name: "Saint-Barthélemy-d'Anjou", cp: '49124', note: 'maisons de bourg et longères' },
  { name: 'Écouflant', cp: '49000', note: 'secteur pavillonnaire, proximité des basses vallées' },
];

/** Catalogue de prestations affiché sur l'accueil et repris dans le schema.org. */
export const prestations: {
  slug: string;
  titre: string;
  resume: string;
  detail: string;
}[] = [
  {
    slug: 'couverture-neuve',
    titre: 'Couverture neuve',
    resume: 'Toiture complète sur construction ou extension.',
    detail:
      'Pose de la charpente à la finition : liteaunage, écran de sous-toiture, ardoise ou tuile de terre cuite, faîtage et points singuliers. Nous travaillons sur plans d’architecte comme sur relevé maison.',
  },
  {
    slug: 'refection-toiture-ardoise-angers',
    titre: 'Réfection de toiture en ardoise',
    resume: 'Dépose complète et couverture neuve en ardoise d’Anjou.',
    detail:
      'Quand les crochets rouillent et que l’ardoise feuillette, la reprise ne suffit plus. Dépose, contrôle de la charpente, écran neuf, liteaunage refait et pose à crochets inox ou au clou selon la pente.',
  },
  {
    slug: 'recherche-de-fuite',
    titre: 'Recherche de fuite',
    resume: "Localiser l’entrée d’eau avant qu’elle n’abîme le bâti.",
    detail:
      'Test à l’eau, inspection des noues, solins, souches et pénétrations, examen sous combles. Vous recevez un compte rendu avec photos et un devis de réparation ciblé.',
  },
  {
    slug: 'zinguerie',
    titre: 'Zinguerie',
    resume: 'Gouttières, chéneaux, noues et habillages sur mesure.',
    detail:
      'Façonnage à l’atelier et pose de zinc, cuivre ou aluminium : gouttières pendantes, chéneaux encaissés, noues, bandes de rive, couvertines. Soudure à l’étain, pentes calculées pour l’évacuation.',
  },
  {
    slug: 'demoussage',
    titre: 'Démoussage et traitement',
    resume: 'Nettoyer sans casser, traiter, prolonger la couverture.',
    detail:
      'Brossage manuel ou basse pression, purge des mousses et lichens, traitement hydrofuge fongicide. Sur ardoise ancienne, jamais de nettoyeur haute pression qui décape la patine et fend le matériau.',
  },
  {
    slug: 'fenetre-de-toit',
    titre: 'Fenêtre de toit',
    resume: 'Pose et remplacement de Velux avec raccord étanche.',
    detail:
      'Création de trémie, chevêtre, pose du châssis et du closoir, raccord d’étanchéité et reprise intérieure. Modèles adaptés à l’ardoise et aux faibles épaisseurs de couverture.',
  },
  {
    slug: 'isolation-toiture',
    titre: 'Isolation de toiture',
    resume: 'Isolation par l’extérieur (sarking) pendant la réfection.',
    detail:
      'Profiter d’une couverture neuve pour isoler par sarking : on conserve le volume sous combles et on supprime les ponts thermiques, sans toucher aux plafonds intérieurs.',
  },
  {
    slug: 'entretien-toiture',
    titre: 'Entretien et contrat',
    resume: 'Visite annuelle, purge des chéneaux, petites reprises.',
    detail:
      'Contrôle des faîtages, des solins et des évacuations, remplacement des ardoises glissées, nettoyage des gouttières. Un passage par an évite la grosse dépense imprévue.',
  },
];

export const primaryPrestationSlug = 'refection-toiture-ardoise-angers';

/** Image Open Graph partagée (générée par app/opengraph-image.tsx). */
export const ogImages = [
  {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: 'Couverture Vasseur — couvreur zingueur à Angers, spécialiste de l’ardoise d’Anjou',
  },
];
