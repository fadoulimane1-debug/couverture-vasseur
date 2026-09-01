import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import Steps from '@/components/Steps';
import Faq from '@/components/Faq';
import DevisBand from '@/components/DevisBand';
import PhoneLink from '@/components/PhoneLink';
import Jsonld from '@/components/Jsonld';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { business, communes, primaryPrestationSlug } from '@/lib/site';

const PATH = '/couvreur-angers';
const limitrophes = communes.filter((c) => c.name !== 'Angers');

export const metadata: Metadata = {
  title: 'Couvreur à Angers (49) — Toitures anciennes & ardoise d’Anjou',
  description:
    'Couvreur à Angers spécialiste des toitures anciennes : maisons de ville en tuffeau, secteur patrimonial de la Doutre et de la cité, ardoise d’Anjou. Diagnostic local, urbanisme ABF, devis gratuit sous 48 h.',
  alternates: { canonical: PATH },
  openGraph: {
    url: PATH,
    title: 'Couvreur à Angers — toitures anciennes et ardoise d’Anjou',
    description:
      'Le bâti angevin, ses pathologies de toiture, ses contraintes d’accès en centre ancien et son urbanisme : la page ville de Couverture Vasseur.',
  },
};

const faq = [
  {
    q: 'Intervenez-vous dans le secteur patrimonial de la Doutre et de la cité ?',
    a: 'Oui, c’est une grande partie de notre activité. Ces quartiers imposent l’ardoise naturelle, un faîtage traditionnel et des teintes de zinguerie validées. Nous montons le dossier pour l’Architecte des Bâtiments de France et adaptons la pose aux exigences du Site patrimonial remarquable.',
  },
  {
    q: 'Mon immeuble donne sur une rue piétonne du centre : est-ce un obstacle ?',
    a: 'Non, mais cela demande de l’organisation : créneau de livraison, mini-benne ou big-bags, échafaudage monté tôt le matin, portage à la main. On obtient auprès de la Ville l’autorisation d’accès et d’occupation, et on cale les rotations de camion sur les horaires autorisés.',
  },
  {
    q: 'Peut-on encore trouver de l’ardoise de Trélazé ?',
    a: 'Les carrières de Trélazé ne produisent plus. On récupère de l’ardoise angevine ancienne en dépose pour les raccords et les petites surfaces. Pour une réfection complète, on pose une ardoise naturelle de schiste équivalente, au même format et à la même teinte bleu-noir, admise en secteur ABF.',
  },
  {
    q: 'La proximité de la Maine et de la Loire aggrave-t-elle les soucis de toiture ?',
    a: 'Indirectement. L’air humide des basses vallées entretient la mousse sur les versants nord et dans les rues encaissées, et les vents d’ouest chargés de pluie sollicitent les rives et les faîtages. Ce sont des toitures qui demandent un entretien un peu plus suivi qu’en plateau.',
  },
  {
    q: 'Combien de temps pour obtenir l’accord de l’ABF à Angers ?',
    a: 'Comptez deux mois d’instruction pour une déclaration préalable soumise à avis de l’ABF, contre un mois sans. En préparant un dossier complet — matériaux, teintes, photos, coupe de principe — on évite les demandes de pièces qui rallongent le délai.',
  },
  {
    q: 'Faut-il une autorisation pour changer l’aspect des châssis de toit en centre-ville ?',
    a: 'Oui. Modifier, ajouter ou remplacer une fenêtre de toit visible depuis l’espace public relève de la déclaration préalable, avec avis de l’ABF dans le périmètre protégé. On privilégie des châssis à faible saillie, encastrés, de teinte sombre, qui passent le mieux.',
  },
];

export default function CouvreurAngers() {
  return (
    <>
      <Jsonld data={faqSchema(faq)} />
      <Jsonld
        data={breadcrumbSchema([
          { name: 'Accueil', path: '/' },
          { name: 'Couvreur à Angers', path: PATH },
        ])}
      />

      {/* 1 — H1 angle local */}
      <section className="blueprint-grid border-b border-ciel/15">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:px-8 md:pb-14 md:pt-20">
          <nav aria-label="Fil d’Ariane" className="cartouche">
            <Link href="/" className="hover:text-papier">Accueil</Link>
            <span className="mx-2 text-papier/30">/</span>
            <span className="text-papier/60">Couvreur à Angers</span>
          </nav>
          <h1 className="mt-4 max-w-4xl text-[2.2rem] leading-[1.07] text-papier sm:text-5xl md:text-[3.6rem]">
            Couvreur à Angers : toitures anciennes et ardoise d’Anjou
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-papier/80">
            Angers ne se couvre pas comme un lotissement de plaine. Maisons de
            ville en tuffeau, immeubles de faubourg, secteur patrimonial de la
            Doutre et de la cité : voici comment on aborde une toiture ici, ce
            qu’on y trouve, et ce qui change dans le chiffrage et les
            autorisations.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PhoneLink label={`Appeler — ${business.phoneDisplay}`} />
            <Link
              href="#devis"
              className="inline-flex items-center rounded-[2px] border border-ciel/40 px-5 py-3 font-mono text-[0.78rem] uppercase tracking-label text-ciel hover:bg-ciel/10"
            >
              Devis gratuit sous 48 h
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — Bloc devis en tête */}
      <DevisBand
        title="Devis gratuit sous 48 h"
        intro="Une toiture angevine se lit sur place : orientation de la rue, mitoyenneté, état du faîtage. Donnez-nous l’adresse, on vient voir."
      />

      {/* 3 — Bâti réel */}
      <Section
        eyebrow="Le bâti"
        title="Angers, une ville qui se couvre en ardoise"
        intro="Le matériau n’est pas un choix de goût : c’est l’aboutissement d’une géographie et d’une histoire industrielle."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <p>
              Le centre d’Angers est fait de <strong>maisons de ville en
              tuffeau</strong> et en moellon de schiste, mitoyennes, hautes et
              étroites, avec des toitures à deux pans, parfois à croupe, souvent
              percées de lucarnes. Autour, les faubourgs — Saint-Jacques,
              Madeleine, La Fayette, Doutre — alignent des maisons de rapport de
              la fin du XIXᵉ, à combles brisés et zinguerie ouvragée. Plus loin,
              la couronne pavillonnaire mélange l’ardoise et la tuile.
            </p>
            <p>
              Sur tout cet ensemble, l’<strong>ardoise</strong> domine. Elle
              venait des <strong>carrières de Trélazé et de l’Anjou</strong>, à
              quelques kilomètres, qui ont couvert la région pendant plus de
              cinq siècles. C’est une ardoise de schiste bleu-noir, fine et
              dense, qui prend une patine mate sans se déliter. Les règlements
              d’urbanisme du centre l’ont figée comme référence : sur une maison
              ancienne d’Angers, on repart en ardoise naturelle, au format
              traditionnel, avec un faîtage et des rives dans l’esprit du
              quartier.
            </p>
          </div>
        </div>
      </Section>

      {/* 4 — Pathologies locales */}
      <Section
        eyebrow="Diagnostic local"
        title="Les désordres qu’on retrouve toit après toit ici"
        intro="Le bâti mitoyen, l’humidité des vallées et l’âge des couvertures créent une série de pathologies récurrentes."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <ul>
              <li><strong>Mousse et rétention d’eau sur les versants nord</strong> et dans les rues encaissées : l’ardoise sèche mal, gèle, et les crochets se corrodent plus vite.</li>
              <li><strong>Fuites en pignon mitoyen</strong> : le solin contre le mur du voisin a fatigué, ou une reprise de couverture côté voisin a laissé un point faible.</li>
              <li><strong>Noues et arêtiers fatigués</strong> sur les toitures à croupe et à la Mansart, très présentes dans les faubourgs : le zinc de noue a quarante ans et se perce.</li>
              <li><strong>Faîtages au mortier éclaté</strong> : les toitures anciennes ont un faîtage scellé, sensible au gel et au vent ; il descend rang par rang.</li>
              <li><strong>Zingueries de descente sous-dimensionnées</strong> ou disjointes sur les maisons de rapport, avec ruissellement sur la façade en tuffeau — qui se creuse.</li>
              <li><strong>Écran de sous-toiture absent</strong> : sur beaucoup de toitures d’avant 1980, il n’y a rien entre l’ardoise et les combles ; la moindre ardoise cassée laisse entrer l’eau.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 5 — Accès */}
      <Section
        eyebrow="Contraintes de chantier"
        title="Se garer, monter, échafauder dans le centre d’Angers"
        intro="La moitié de la difficulté d’un chantier en centre ancien tient à la logistique, pas à la couverture elle-même."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <p>
              Rues étroites de la Doutre, voies piétonnes autour de la
              cathédrale et de la place du Ralliement, stationnement rare et
              zones à circulation restreinte : un camion de couvreur ne se pose
              pas n’importe où ni n’importe quand. On travaille avec des
              <strong> créneaux de livraison</strong>, des <strong>big-bags</strong>
              {' '}ou une mini-benne plutôt qu’une benne classique, et un
              <strong> portage à la main</strong> sur les derniers mètres.
            </p>
            <p>
              L’échafaudage empiète presque toujours sur le trottoir ou une place
              de stationnement : il faut une <strong>autorisation d’occupation du
              domaine public</strong> auprès de la Ville, parfois la
              neutralisation d’une place par arrêté, et un <strong>passage
              piéton protégé</strong> sous tunnel quand le trottoir est maintenu.
              Sur cour intérieure sans recul, on passe par de l’échafaudage
              modulaire monté à la main, voire une nacelle sur autorisation. Tout
              cela figure au devis, avec les délais d’obtention.
            </p>
          </div>
        </div>
      </Section>

      {/* 6 — Pourquoi ça se chiffre autrement */}
      <Section
        eyebrow="Budget local"
        title="Pourquoi une toiture se chiffre autrement à Angers"
        intro="À surface égale, une réfection en centre ancien coûte plus qu’en périphérie. Ce n’est pas une question de tarif, mais de contexte."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <p>
              Trois choses pèsent : la <strong>logistique contrainte</strong>
              {' '}(accès, portage, occupation de voirie, rotations limitées), le
              <strong> temps administratif</strong> (déclaration préalable, avis
              de l’ABF, autorisation de voirie, parfois assemblée de
              copropriété), et l’<strong>exigence de matériau et de finition</strong>
              {' '}imposée par le secteur protégé — ardoise naturelle, faîtage
              traditionnel, zinguerie soignée aux teintes validées.
            </p>
            <p>
              À l’inverse, à Beaucouzé ou à Écouflant, sur un pavillon récent
              avec cour et accès direct, la même surface se pose plus vite, avec
              une benne au pied du chantier et un simple récépissé de
              déclaration. L’écart de prix vient de là — et le devis le montre
              poste par poste pour que ce soit clair.
            </p>
          </div>
        </div>
      </Section>

      {/* 7 — Points vérifiés en premier */}
      <Section
        eyebrow="Méthode locale"
        title="Les points qu’on vérifie en premier sur un toit angevin"
        intro="Sur le bâti d’ici, ce sont toujours les mêmes endroits qui lâchent. On y va directement."
      >
        <div className="grid gap-px overflow-hidden rounded-[3px] border border-ciel/20 bg-ciel/20 md:grid-cols-2">
          {[
            { t: 'Le faîtage et les rives', d: 'Sur les toitures anciennes à faîtage scellé, on cherche le mortier éclaté, les faîtières qui bougent, les rives descellées côté vent dominant (ouest–sud-ouest).' },
            { t: 'Les noues et les arêtiers', d: 'Toitures à croupe et à la Mansart des faubourgs : état du zinc de noue, recouvrement des ardoises biaisées, présence de percements et de traces d’écoulement.' },
            { t: 'Les solins de souche', d: 'Cheminées souvent multiples et hautes : mortier des solins, bandes de recouvrement au plomb, closoir arrière, souche fissurée qui prend l’eau par le conduit.' },
            { t: 'L’égout et la première rangée', d: 'Doublis, about de chevrons, bavette en zinc, alignement de la gouttière : c’est là que la rétention de mousse fait le plus de dégâts.' },
            { t: 'L’écran de sous-toiture', d: 'Présent ou absent ? Déchiré ? Sur beaucoup de toits angevins il n’y en a pas : on en tient compte pour la suite du diagnostic.' },
            { t: 'Les entrées d’eau en pignon mitoyen', d: 'Raccord contre le mur du voisin, solin partagé, différence de niveau de couverture d’une maison à l’autre : point sensible du bâti mitoyen.' },
          ].map((f) => (
            <div key={f.t} className="bg-nuit-2 p-6 md:p-7">
              <h3 className="font-display text-lg text-papier">{f.t}</h3>
              <p className="mt-2 text-sm text-papier/70">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8 — Déroulé local avec autorisations */}
      <Section
        eyebrow="Déroulé à Angers"
        title="Un chantier à Angers, autorisations comprises"
        intro="Le calendrier réel d’une réfection en centre ancien : les formalités s’enchaînent avant même le premier jour d’échafaudage."
      >
        <Steps
          items={[
            { t: 'Prise de contact et pré-visite', d: 'Repérage de la rue, de la mitoyenneté, des possibilités d’accès et de stationnement. Premier avis sur reprise ou réfection.' },
            { t: 'Relevé et déclaration préalable', d: 'Métré complet, coupe de principe, choix des matériaux et teintes. Dépôt de la déclaration préalable au service urbanisme de la Ville d’Angers.' },
            { t: 'Instruction ABF et voirie', d: 'En secteur protégé, avis de l’Architecte des Bâtiments de France (délai porté à deux mois). En parallèle, demande d’occupation du domaine public pour l’échafaudage.' },
            { t: 'Installation en site contraint', d: 'Échafaudage monté aux heures autorisées, tunnel piéton, protections de façade en tuffeau, big-bags ou mini-benne selon l’accès.' },
            { t: 'Réfection par versant', d: 'Dépose, charpente, écran, liteaunage et couverture versant par versant pour garder le logement hors d’eau. Points singuliers au plomb.' },
            { t: 'Réception et visite de contrôle', d: 'Repli complet, nettoyage, remise des garanties. Visite de contrôle proposée un an après, utile sur les toitures exposées du centre.' },
          ]}
        />
      </Section>

      {/* 9 — Urbanisme ABF */}
      <Section
        eyebrow="Urbanisme"
        title="Site patrimonial remarquable et Architecte des Bâtiments de France"
        intro="Une grande partie du centre d’Angers est protégée. Concrètement, cela encadre l’aspect de votre toiture."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <p>
              Le <strong>Site patrimonial remarquable</strong> d’Angers couvre la
              cité, le quartier de la cathédrale, la Doutre et leurs abords.
              Toute intervention modifiant l’aspect extérieur y est soumise à
              <strong> déclaration préalable</strong> avec <strong>avis de
              l’ABF</strong>. L’architecte vérifie le matériau (ardoise
              naturelle), le format, la teinte de la zinguerie, le type de
              faîtage, la discrétion des châssis de toit et des sorties.
            </p>
            <p>
              En pratique, une réfection à l’identique en ardoise passe sans
              difficulté ; les points de friction sont les matériaux de
              substitution, les teintes claires, les grandes verrières et les
              panneaux solaires en surimposition. On arbitre ces choix avec vous
              avant le dépôt, pour ne pas perdre deux mois sur un refus évitable.
            </p>
          </div>
        </div>
      </Section>

      {/* 10 — Copropriété angevine */}
      <Section
        eyebrow="Copropriété"
        title="Le cas des immeubles de rapport angevins"
        intro="Beaucoup de toitures du centre couvrent des copropriétés de trois à huit lots. La décision passe par l’assemblée."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <p>
              La toiture est une <strong>partie commune</strong> : les travaux se
              votent en <strong>assemblée générale</strong>, à la majorité de
              l’article 25 pour une réfection, de l’article 24 pour un entretien.
              Il faut inscrire la question à l’ordre du jour, joindre les devis à
              la convocation et, souvent, provisionner sur plusieurs exercices.
            </p>
            <p>
              Sur les petites copropriétés sans syndic professionnel, fréquentes
              à Angers, on aide le syndic bénévole à monter le dossier : devis
              lisible, échéancier, planning tenant compte des délais d’urbanisme.
              On peut présenter le chantier en AG. Une fois le vote acquis, le
              calendrier administratif démarre.
            </p>
          </div>
        </div>
      </Section>

      {/* 11 — FAQ locale */}
      <Section
        eyebrow="Questions fréquentes"
        title="Couvreur à Angers : les questions locales"
        intro="Secteur protégé, rues piétonnes, ardoise de Trélazé, humidité des vallées : ce qu’on nous demande spécifiquement ici."
      >
        <Faq items={faq} />
      </Section>

      {/* 12 — Communes limitrophes */}
      <Section
        id="communes"
        eyebrow="Autour d’Angers"
        title="Communes limitrophes"
        intro="Le même savoir-faire, avec des contraintes d’accès et d’urbanisme souvent plus souples qu’en centre-ville."
      >
        <ul className="grid gap-px overflow-hidden rounded-[3px] border border-ciel/20 bg-ciel/20 sm:grid-cols-2">
          {limitrophes.map((c) => (
            <li key={c.name} className="bg-nuit-2 p-5">
              <span className="font-display text-lg text-papier">Couvreur {c.name}</span>
              <span className="ml-2 font-mono text-[0.72rem] text-ciel/70">{c.cp}</span>
              <p className="mt-1 text-sm text-papier/65">{c.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-papier/60">
          Voir aussi :{' '}
          <Link href={`/${primaryPrestationSlug}`} className="text-ciel underline underline-offset-2">
            réfection de toiture en ardoise à Angers
          </Link>{' '}
          ·{' '}
          <Link href="/#prestations" className="text-ciel underline underline-offset-2">
            toutes les prestations
          </Link>{' '}
          ·{' '}
          <Link href="/#devis" className="text-ciel underline underline-offset-2">
            demander un devis
          </Link>
          .
        </p>
      </Section>

      {/* Bloc devis (bas) */}
      <DevisBand
        id="devis-bas"
        title="Votre toiture angevine, vue par un couvreur d’ici"
        intro="On connaît les rues, les interlocuteurs d’urbanisme et le bâti. Laissez vos coordonnées, on fixe la visite."
      />
    </>
  );
}
