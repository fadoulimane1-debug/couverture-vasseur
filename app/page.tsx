import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/Section';
import Steps from '@/components/Steps';
import Faq from '@/components/Faq';
import Figure from '@/components/Figure';
import DevisBand from '@/components/DevisBand';
import PhoneLink from '@/components/PhoneLink';
import PriceTable from '@/components/PriceTable';
import Testimonials from '@/components/Testimonials';
import Jsonld from '@/components/Jsonld';
import { faqSchema } from '@/lib/schema';
import { business, communes, ogImages, prestations, primaryPrestationSlug } from '@/lib/site';

export const metadata: Metadata = {
  title:
    'Couvreur Angers 49 — Rénovation toiture ardoise | Couverture Vasseur',
  description:
    'Couvreur zingueur à Angers (49) : réfection de toiture en ardoise d’Anjou, recherche de fuite, zinguerie, démoussage. Artisan RGE Qualibat, garantie décennale, 47 avis 4,9/5. Devis gratuit sous 48 h.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Couverture Vasseur',
    url: '/',
    title: 'Couvreur zingueur à Angers — Couverture Vasseur',
    description:
      'Réfection de toiture en ardoise d’Anjou et entretien des toitures anciennes à Angers et alentour. Devis gratuit sous 48 h.',
    images: ogImages,
  },
};

const faq = [
  {
    q: 'Sous quel délai intervenez-vous à Angers ?',
    a: 'Pour une demande de devis, nous rappelons sous 48 h ouvrées et fixons une visite dans la semaine. En cas de fuite active, nous passons sous 24 à 48 h pour une mise hors d’eau provisoire, puis nous programmons la réparation définitive.',
  },
  {
    q: 'Le devis et le déplacement sont-ils vraiment gratuits ?',
    a: 'Oui, sur toute la zone d’intervention : Angers et les communes limitrophes. La visite technique, la prise de mesures et le devis détaillé ne vous engagent à rien et ne vous sont jamais facturés.',
  },
  {
    q: 'Combien coûte une réfection de toiture en ardoise à Angers ?',
    a: 'Pour une réfection complète en ardoise naturelle d’Anjou, comptez de 180 à 320 €/m² dépose comprise, selon la pente, l’accès et l’état de la charpente. L’ardoise fibre-ciment descend autour de 120 à 190 €/m². Le chiffrage précis se fait toujours après visite.',
  },
  {
    q: 'Existe-t-il des aides pour refaire une toiture ?',
    a: 'La réfection seule n’ouvre pas droit à aide. En revanche, si vous en profitez pour isoler la toiture (sarking, isolation des combles), les travaux d’isolation peuvent être éligibles à MaPrimeRénov’, aux CEE et à la TVA à 5,5 %. Notre certification RGE Qualibat est la condition pour y prétendre.',
  },
  {
    q: 'Faut-il une autorisation d’urbanisme pour refaire un toit ?',
    a: 'Un remplacement à l’identique reste soumis à déclaration préalable de travaux dès qu’il modifie l’aspect extérieur. À Angers, une grande partie du centre est en Site patrimonial remarquable : l’avis de l’Architecte des Bâtiments de France est alors requis. Nous montons le dossier avec vous.',
  },
  {
    q: 'Mon logement est en copropriété : comment ça se passe ?',
    a: 'La toiture est une partie commune. Les travaux doivent être votés en assemblée générale, sur la base d’un ou plusieurs devis. Nous fournissons un devis lisible par le conseil syndical et le syndic, avec le détail des postes, et nous pouvons présenter le chantier en AG si besoin.',
  },
  {
    q: 'Intervenez-vous en urgence après une tempête ?',
    a: 'Oui. Ardoises envolées, faîtage arraché, infiltration : nous priorisons ces appels et posons une bâche lestée ou une réparation provisoire pour arrêter l’eau, avant de chiffrer la remise en état.',
  },
  {
    q: 'Posez-vous de l’ardoise naturelle ou de la fibre-ciment ?',
    a: 'Les deux, selon le bâti et le budget. Sur une maison ancienne du centre d’Angers ou un secteur protégé, l’ardoise naturelle s’impose souvent, pour l’aspect et la tenue dans le temps. Sur un pavillon récent, la fibre-ciment est un choix cohérent et plus économique.',
  },
  {
    q: 'Travaillez-vous en dehors d’Angers ?',
    a: 'Nous couvrons Angers, Avrillé, Beaucouzé, Les Ponts-de-Cé, Trélazé, Saint-Barthélemy-d’Anjou et Écouflant. Pour un chantier ailleurs dans le Maine-et-Loire, appelez-nous : nous étudions au cas par cas.',
  },
];

const chantiers = [
  {
    photo: '/img/photos/chantier-ardoise-toiture.jpg',
    titre: 'Maison de ville en tuffeau, secteur sauvegardé — Angers',
    photoAlt:
      'Toiture en ardoise naturelle à forte pente couverte de lucarnes rampantes, ardoises patinées et rangs de rive taillés — couverture d’une maison de ville comparable à celles du centre d’Angers.',
    photoCaption: 'Couverture en ardoise naturelle, forte pente et lucarnes',
    texte:
      'Toiture d’origine à bout de souffle : crochets rouillés, ardoises feuilletées, faîtage au mortier éclaté. Dépose complète, contrôle de la charpente chêne, écran de sous-toiture, liteaunage neuf et pose d’ardoise d’Anjou 32×22 à crochet inox. Faîtage à sec sur closoir ventilé, zinguerie et descente refaites. Dossier ABF déposé et suivi.',
  },
  {
    photo: '/img/photos/chantier-demoussage-faitage.jpg',
    titre: 'Longère à Avrillé — démoussage et reprise de faîtage',
    photoAlt:
      'Versant de toiture en ardoise envahi par la mousse et le lichen, faîtage moussu et partiellement descellé en tête de pignon — état avant démoussage et reprise du faîtage.',
    photoCaption: 'Versant envahi par la mousse — avant démoussage',
    texte:
      'Pas de réfection ici : la couverture était saine sous la mousse. Brossage manuel et basse pression, purge des lichens, traitement hydrofuge fongicide. Reprise du faîtage au mortier bâtard sur 22 mètres, remplacement des ardoises cassées et réfection du raccord de lucarne au plomb.',
  },
  {
    photo: '/img/photos/chantier-zinguerie-ardoise.jpg',
    titre: 'Maison de bord de Loire aux Ponts-de-Cé — réfection de noue',
    photoAlt:
      'Ouvrage de couvreur-zingueur sur toiture en ardoise : tourelle couverte en ardoise avec poinçon en cuivre patiné, raccords métalliques et souches en pierre de taille sur ciel bleu.',
    photoCaption: 'Ardoise et zinguerie — raccords métalliques et poinçon cuivre',
    texte:
      'Auréoles sous combles à l’aplomb de la noue : le zinc, posé il y a quarante ans, était percé. Dépose des ardoises de rive de noue, fond de noue neuf en zinc 0,8 mm, pente d’évacuation reprise, ardoises recoupées en biais et fixées au crochet. Reprise de l’égout sur trois mètres.',
  },
];

const facteursPrix = [
  {
    t: 'L’accès au chantier',
    d: 'Une rue étroite du centre d’Angers, un stationnement impossible, une cour sans recul : tout cela conditionne le type d’échafaudage, la manutention et parfois une autorisation de voirie. C’est souvent le premier poste qui écarte deux devis.',
  },
  {
    t: 'Le nombre de points singuliers',
    d: 'Pans, noues, arêtiers, lucarnes, souches, croupes : chaque raccord demande de la zinguerie et du temps. Une toiture à deux pans ne se chiffre pas comme une toiture à la Mansart, avec brisis en ardoise et lucarnes rampantes.',
  },
  {
    t: 'L’état de la charpente',
    d: 'On ne le voit qu’une fois la couverture déposée. Chevrons attaqués, pannes fléchies, entrait fendu : les reprises se chiffrent en supplément, sur devis complémentaire signé avant de continuer. Une charpente n’est jamais découverte sans vous être montrée.',
  },
  {
    t: 'Le matériau et la dépose',
    d: 'Ardoise naturelle d’Anjou, ardoise fibre-ciment, tuile plate de pays : les fournitures vont du simple au double. S’ajoutent la dépose de l’ancienne couverture, le tri et l’évacuation en filière professionnelle, plus lourds en présence de plaques anciennes.',
  },
];

const gridWrap =
  'grid gap-px overflow-hidden rounded-[3px] border border-nuit/12 bg-nuit/12';

export default function Accueil() {
  return (
    <>
      <Jsonld data={faqSchema(faq)} />

      {/* Bandeau d'ouverture — photo de chantier plein cadre + léger dégradé de lisibilité */}
      <section className="tone-dark relative isolate flex min-h-[34rem] flex-col justify-center overflow-hidden border-b border-nuit/10 bg-nuit md:min-h-[40rem]">
        {/* Photo de fond — visible d'emblée, donc priority (pas de lazy loading) */}
        <Image
          src="/img/photos/hero-chantier-echafaudage.jpg"
          alt="Couvreur en casque et gants de protection sur un échafaudage, à l’égout d’une toiture en cours de réfection, près d’une souche de cheminée en brique."
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        {/* Dégradé de lisibilité : fond léger (~26 %) sur toute la photo, renforcé
            en haut et à gauche derrière le texte. La photo reste dominante. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(90deg, rgba(12,19,28,0.74) 0%, rgba(12,19,28,0.56) 26%, rgba(12,19,28,0.35) 44%, rgba(12,19,28,0.08) 58%, rgba(12,19,28,0) 68%),' +
              'linear-gradient(180deg, rgba(12,19,28,0.55) 0%, rgba(12,19,28,0.36) 24%, rgba(12,19,28,0.12) 44%, rgba(12,19,28,0) 62%),' +
              'linear-gradient(rgba(12,19,28,0.26), rgba(12,19,28,0.26))',
          }}
        />
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          {/* Sur photo : cartouche en papier (et non bleu ciel) pour garantir le contraste AA */}
          <p className="cartouche !text-papier">Angers · Anjou · Maine-et-Loire 49</p>
          <h1 className="mt-4 max-w-2xl text-white [text-shadow:0_1px_2px_rgba(12,19,28,0.7),0_4px_20px_rgba(12,19,28,0.5)]">
            Couvreur zingueur à Angers
          </h1>
          <p className="mt-6 max-w-lg text-lg text-papier [text-shadow:0_1px_2px_rgba(12,19,28,0.7),0_2px_14px_rgba(12,19,28,0.5)] md:text-xl">
            La toiture ancienne d’Angers, reprise dans les règles de l’ardoise
            d’Anjou — par l’artisan qui monte lui-même sur le toit.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PhoneLink label={`Appeler — ${business.phoneDisplay}`} />
            <Link
              href="#devis"
              className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-papier px-5 py-3 font-mono text-[0.78rem] uppercase tracking-label text-nuit transition-all duration-150 hover:-translate-y-px hover:bg-white"
            >
              Devis gratuit sous 48 h
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Gages de confiance dès le premier écran */}
          <div className="badge-row mt-7 max-w-xl">
            <span className="badge"><b>RGE</b> Qualibat</span>
            <span className="badge"><b>Décennale</b> MMA</span>
            <span className="badge"><b>{business.trust.rating}/5</b> · {business.trust.reviewCount} avis Google</span>
            <span className="badge"><b>{business.yearsLabel}</b></span>
          </div>
        </div>
      </section>

      {/* La matière d'abord : l'ardoise d'Anjou et la pente */}
      <Section
        eyebrow="Le schiste bleu"
        title="Angers se couvre en ardoise d’Anjou — et ça commande tout le reste"
        intro="Avant de parler travaux, il faut parler pierre. Le matériau du toit, ici, n’est pas une option de catalogue : il découle du sol et de l’histoire du bassin ardoisier."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <h3>Une pierre tirée du sous-sol angevin</h3>
            <p>
              Le bassin de Trélazé et de l’Anjou a livré pendant des siècles une
              ardoise de schiste dense, à grain fin, d’un bleu-noir profond qui
              prend la patine sans se déliter. Les maisons de ville d’Angers, les
              longères de la couronne, les corps de ferme du plateau en sont
              tous coiffés. Y poser autre chose, c’est casser l’unité d’une rue —
              et, dans le centre, se heurter au règlement du Site patrimonial
              remarquable. Nous travaillons l’ardoise naturelle au format
              traditionnel <strong>32×22</strong>, et une ardoise fibre-ciment de
              teinte voisine quand la pente ou le budget l’imposent.
            </p>
            <h3>La pente fait l’étanchéité, pas l’ardoise seule</h3>
            <p>
              Une ardoise ne retient pas l’eau : elle la fait glisser, par
              recouvrement et par gravité. Sous un certain degré de pente, l’eau
              s’attarde, remonte par capillarité entre les ardoises et ressort
              sous les combles. Face aux pluies d’ouest et aux rafales qui
              remontent la vallée de la Loire, on cherche une pente franche et un
              recouvrement large ; sur les toits anciens trop plats, on double
              d’un écran de sous-toiture HPV, parfois d’un support continu. C’est
              la première cote relevée à la visite, parce qu’elle décide de tout
              le devis.
            </p>
          </div>
        </div>

        {/* Gros plan sur une couverture en ardoise : pose et recouvrements */}
        <Figure
          src="/img/photos/ardoise-gros-plan.jpg"
          alt="Gros plan d’une couverture en ardoise naturelle posée en écaille : rangs d’ardoises taillées en pointe qui se recouvrent autour d’une petite lucarne à faîtage rouge, crochets de fixation apparents."
          caption="Ardoise naturelle posée en écaille — recouvrements et rangs de rive"
          width={1500}
          height={1000}
          className="mt-8 md:mt-10"
        />
      </Section>

      {/* Bloc devis — haut de page (« Devis gratuit sous 48 h ») */}
      <DevisBand />

      {/* L'artisan, avant le catalogue */}
      <Section
        eyebrow="Sur l’échafaudage"
        title="L’homme qui monte sur le toit a un nom"
        intro="Ici, pas de standard téléphonique qui revend votre demande à un poseur inconnu. Vous parlez au couvreur qui relèvera votre toit et posera vos ardoises."
      >
        <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-start">
          <Figure
            src="/img/photos/couvreur-au-travail-toiture.jpg"
            alt="Couvreur en casque et lunettes de protection, agenouillé sur une toiture mise à nu jusqu’au liteaunage, déposant les anciennes tuiles au cours d’un chantier de réfection."
            caption="Sur le chantier — dépose de la couverture avant réfection"
            width={1500}
            height={1000}
          />
          <div className="panneau rounded-[4px] p-6 md:p-8">
            <div className="prose-vasseur">
              <h3>Julien Vasseur, passé par le compagnonnage</h3>
              <p>
                Formé chez les Compagnons du Devoir, revenu du Tour de France du
                métier, {business.founderFirstName} a posé ses caisses à Angers
                en {business.foundingYear}. C’est lui qui relève, lui qui chiffre,
                lui qui est sur l’échafaudage le jour de la pose. De ce fil tendu
                entre la visite et le toit dépend qu’un détail repéré se retrouve
                bien exécuté.
              </p>
              <h3>Trois paires de mains, jamais une plateforme</h3>
              <p>
                {business.team}. Un seul chantier à la fois, du démontage à la
                réception, sans courir après dix affaires. La zinguerie est pliée
                à l’atelier, aux cotes relevées sur place. Ce parti pris borne le
                volume qu’on peut prendre — c’est le prix de la finition.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-nuit/12 bg-nuit/12 sm:grid-cols-4">
              {[
                { k: `${new Date().getFullYear() - business.foundingYear} ans`, v: 'installé à Angers' },
                { k: `~${business.trust.roofsPerYear}`, v: 'toitures / an' },
                { k: 'Compagnon', v: 'du Devoir · Tour de France' },
                { k: 'RGE', v: 'Qualibat — certifié à titre personnel' },
              ].map((s) => (
                <div key={s.v} className="bg-white p-4">
                  <dt className="font-display text-lg text-encre">{s.k}</dt>
                  <dd className="mt-1 text-xs text-nuit/65">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Grille de prestations : 8 métiers */}
      <Section
        id="prestations"
        eyebrow="Au répertoire de l’atelier"
        title="Huit métiers, une seule main sur le toit"
        intro="Du relevé de charpente à la dernière soudure d’étain, tout passe par l’équipe. Rien n’est confié à un tâcheron de passage."
        note={['RGE Qualibat', 'Garantie décennale', 'Aucune sous-traitance']}
      >
        <div className={`${gridWrap} md:grid-cols-2`}>
          {prestations.map((p) => {
            const isPage = p.slug === primaryPrestationSlug;
            return (
              <div key={p.slug} className="bg-white p-6 md:p-7">
                <h3 className="text-[1.05rem] text-nuit">
                  {isPage ? (
                    <Link href={`/${primaryPrestationSlug}`} className="hover:text-encre">
                      {p.titre} →
                    </Link>
                  ) : (
                    p.titre
                  )}
                </h3>
                <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-label text-encre">
                  {p.resume}
                </p>
                <p className="mt-3 text-sm text-nuit/70">{p.detail}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Réalisations : 3 chantiers menés autour d'Angers */}
      <Section
        eyebrow="Relevés de chantier"
        title="Trois toits de l’agglomération"
        intro="Une réfection lourde, un entretien, une réparation ciblée : trois façons d’aborder une couverture d’ardoise, sur des chantiers menés autour d’Angers."
      >
        <div className="grid gap-10">
          {chantiers.map((c) => (
            <article key={c.titre} className="grid gap-5 md:grid-cols-[1.1fr_1fr] md:items-center">
              <Figure
                src={c.photo}
                alt={c.photoAlt}
                caption={c.photoCaption}
                width={1500}
                height={1000}
              />
              <div>
                <h3 className="text-[1.05rem] text-nuit">{c.titre}</h3>
                <p className="mt-3 text-nuit/70">{c.texte}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-nuit/70">
          Photographies d’illustration (toitures et ouvrages en ardoise
          comparables). Les clichés de nos propres chantiers se voient sur
          demande, avec l’accord des propriétaires.
        </p>
      </Section>

      {/* Déroulé d'un chantier : 6 étapes ordonnées */}
      <Section
        eyebrow="Dans l’ordre des passes"
        title="Comment un chantier avance, de l’appel au démontage de l’échafaudage"
        intro="Une couverture se mène toujours dans la même succession. La voici, de la première sonnerie au repli — chaque étape validée avec vous avant d’attaquer la suivante."
      >
        <Steps
          items={[
            { t: 'Le premier appel', d: 'On note l’adresse, le type de toiture, ce que vous constatez. Si c’est une fuite active, on programme une mise hors d’eau sans attendre le devis.' },
            { t: 'La visite technique', d: 'Julien monte sur le toit ou l’inspecte depuis une échelle et sous les combles. Relevé des pentes, des points singuliers, état de la charpente, contraintes d’accès et de voirie.' },
            { t: 'Le devis détaillé', d: 'Sous 48 h, un devis poste par poste : dépose, écran, liteaunage, fourniture d’ardoise, zinguerie, échafaudage, évacuation. Les hypothèses de reprise de charpente sont chiffrées à part.' },
            { t: 'La préparation et l’échafaudage', d: 'Déclaration préalable et, si besoin, dossier ABF et autorisation de voirie. Montage de l’échafaudage, protection des abords, bâche d’attente.' },
            { t: 'La pose', d: 'Dépose, contrôle et traitement de la charpente, écran et liteaunage, couverture, faîtage, zinguerie et points singuliers. Le toit reste hors d’eau chaque soir.' },
            { t: 'La réception du chantier', d: 'Tour du toit avec vous, nettoyage complet, évacuation des gravats. Remise des attestations de garantie et de la facture. Une visite de contrôle est proposée l’année suivante.' },
          ]}
        />
      </Section>

      {/* Prix / facteurs de prix */}
      <Section
        eyebrow="Ce qui pèse sur le devis"
        title="Pourquoi deux toitures de même surface ne coûtent pas pareil"
        intro="Un prix au mètre carré ne dit rien tant qu’on n’a pas vu le toit. Voici les quatre facteurs qui déplacent vraiment un devis, et des fourchettes pour situer votre projet."
        note={['Devis gratuit sous 48 h', 'Déplacement offert', 'Prix ferme après visite']}
      >
        <div className={`${gridWrap} md:grid-cols-2`}>
          {facteursPrix.map((f) => (
            <div key={f.t} className="bg-white p-6 md:p-7">
              <h3 className="text-nuit">{f.t}</h3>
              <p className="mt-2 text-sm text-nuit/70">{f.d}</p>
            </div>
          ))}
        </div>

        <div className="panneau mt-8 rounded-[4px] p-6 md:p-10">
          <p className="text-sm text-nuit/70">
            <strong className="text-nuit">Fourchettes indicatives</strong> ·
            agglomération d’Angers · 2026 — à confirmer après visite.
          </p>
          <div className="mt-5">
            <PriceTable
              rows={[
                { poste: 'Réfection complète en ardoise naturelle d’Anjou, dépose comprise', prix: '180–320 €/m²' },
                { poste: 'Réfection en ardoise fibre-ciment', prix: '120–190 €/m²' },
                { poste: 'Remplacement ponctuel d’ardoises, reprise de faîtage', prix: '250–600 €' },
                { poste: 'Recherche de fuite avec compte rendu photos', prix: '150–350 €' },
                { poste: 'Gouttière zinc demi-ronde posée', prix: '55–90 €/ml' },
                { poste: 'Démoussage, brossage et traitement hydrofuge', prix: '18–35 €/m²' },
                { poste: 'Fenêtre de toit fournie et posée', prix: '900–1 800 €' },
                { poste: 'Échafaudage', prix: '8–15 €/m²' },
              ]}
            />
          </div>
          <p className="mt-5 text-sm text-nuit/60">
            Reprise de charpente, traitement de bois, isolation par sarking :
            postes chiffrés à part, jamais imposés sans qu’on vous montre ce qui
            les justifie.
          </p>
        </div>
      </Section>

      {/* Gages de confiance chiffrés — placés après la démonstration du travail */}
      <Section
        eyebrow="Noir sur blanc"
        title="Les preuves, avant les adjectifs"
        intro="« Sérieux », « qualifié », « à votre écoute » : des mots que tout le monde écrit. Voici plutôt ce qui se contrôle, pièce en main, avant même de nous appeler."
      >
        <dl className={`${gridWrap} sm:grid-cols-2 lg:grid-cols-4`}>
          {[
            { k: `${business.trust.rating} / 5`, v: `${business.trust.reviewCount} avis Google laissés après des chantiers dans l’agglomération` },
            { k: 'RGE Qualibat', v: 'la mention sans laquelle l’isolation n’ouvre aucun droit à aide' },
            { k: 'Décennale', v: 'contractée chez MMA, attestation nominative jointe à chaque devis' },
            { k: `${business.foundingYear}`, v: `à Angers ${business.since} — ${business.yearsLabel}` },
          ].map((s) => (
            <div key={s.v} className="bg-white p-6">
              <dt className="font-display text-2xl text-encre">{s.k}</dt>
              <dd className="mt-2 text-sm text-nuit/70">{s.v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-prose2 text-sm text-nuit/60">
          Numéro de certificat RGE et références d’assurance — {business.trust.qualibat}, {business.trust.decennale} — transmis sans détour, à
          l’écrit, avec le devis.
        </p>

        <Testimonials />
      </Section>

      {/* Garanties */}
      <Section
        eyebrow="Après le repli de l’échafaudage"
        title="Ce qui reste écrit une fois le chantier fini"
        intro="Quand le camion est parti, il reste des papiers. Voici lesquels — et ce sur quoi vous pouvez compter pendant les travaux."
        note={['Garantie décennale', 'RC pro & exploitation', 'Urgence sous 24–48 h']}
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <h3>La décennale et l’année de parfait achèvement</h3>
            <p>
              Toute réfection est couverte par notre garantie décennale
              ({business.trust.decennale}). L’attestation nominative vous est
              remise avec le devis, avant signature. La première année, la
              garantie de parfait achèvement couvre toute reprise, sans
              discussion.
            </p>
            <h3>La responsabilité civile pendant le chantier</h3>
            <p>
              Nous sommes assurés en responsabilité civile professionnelle et
              exploitation : un dégât sur votre bien ou celui d’un voisin pendant
              les travaux est pris en charge sans délai. Justificatifs fournis sur
              simple demande.
            </p>
            <h3>L’urgence et le déplacement</h3>
            <p>
              Fuite active, ardoises envolées, faîtage arraché par un coup de
              vent : {business.trust.urgenceDelay}. Le déplacement, la visite et
              le devis restent gratuits dans toute la zone d’intervention, quel
              que soit le montant des travaux.
            </p>
          </div>
        </div>
      </Section>

      {/* Zone d'intervention — communes nommées une par une */}
      <Section
        id="zone"
        eyebrow="À portée d’échelle"
        title="Angers et sa première couronne, pas au-delà"
        intro="Un rayon resserré, choisi. C’est ce qui permet d’être sur place vite, de connaître les guichets d’urbanisme commune par commune, et de repasser sans facturer la route."
      >
        <ul className={`${gridWrap} sm:grid-cols-2`}>
          {communes.map((c) => (
            <li key={c.name} className="bg-white p-5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display text-lg text-nuit">
                  {c.name === 'Angers' ? (
                    <Link href="/couvreur-angers" className="hover:text-encre">
                      Couvreur à {c.name}
                    </Link>
                  ) : (
                    `Couvreur ${c.name}`
                  )}
                </span>
                <span className="font-mono text-[0.72rem] text-encre">{c.cp}</span>
              </div>
              <p className="mt-1 text-sm text-nuit/65">{c.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-nuit/60">
          Page dédiée :{' '}
          <Link href="/couvreur-angers" className="text-encre-fonce underline underline-offset-2 hover:text-encre">
            couvreur à Angers — toitures anciennes et ardoise d’Anjou
          </Link>
          .
        </p>
      </Section>

      {/* FAQ */}
      <Section
        eyebrow="Au pied de l’échelle"
        title="Les questions qui reviennent avant de signer"
        intro="Délais, budget, aides, urbanisme, copropriété : les réponses brèves. Le reste se règle de vive voix."
      >
        <Faq items={faq} />
      </Section>

      {/* Bloc devis — bas de page, identique au bloc du haut (reconnaissance immédiate) */}
      <DevisBand id="devis-bas" />

      {/* Rappel de contact + maillage interne */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="hairline pt-8">
          <h2 className="text-nuit">Le plus court chemin, c’est le téléphone</h2>
          <p className="mt-4 max-w-prose2 text-nuit/70">
            {business.founderFirstName} décroche lui-même, du lundi au vendredi de
            7 h 30 à 18 h 30 et le samedi matin. Pour une urgence, appelez plutôt
            que d’écrire : la ligne va plus vite qu’un formulaire.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PhoneLink label={`${business.phoneDisplay} — ${business.founderFirstName}`} />
            <PhoneLink variant="ghost" label={`${business.phoneSecondaryDisplay} — atelier`} />
          </div>

          <div className="mt-10 grid gap-6 text-sm text-nuit/70 sm:grid-cols-3">
            <div>
              <p className="cartouche">À lire ensuite</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href={`/${primaryPrestationSlug}`} className="hover:text-encre">
                    Réfection de toiture en ardoise à Angers
                  </Link>
                </li>
                <li>
                  <Link href="/couvreur-angers" className="hover:text-encre">
                    Couvreur à Angers — le contexte local
                  </Link>
                </li>
                <li>
                  <Link href="/#prestations" className="hover:text-encre">
                    Le répertoire complet de l’atelier
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="cartouche">À portée d’échelle</p>
              <ul className="mt-3 space-y-2">
                {communes.slice(0, 4).map((c) => (
                  <li key={c.name}>Couvreur {c.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="cartouche">Où nous trouver</p>
              <address className="mt-3 not-italic">
                {business.address.street}
                <br />
                {business.address.postalCode} {business.address.city}
                <br />
                <a href={`mailto:${business.email}`} className="hover:text-encre">
                  {business.email}
                </a>
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
