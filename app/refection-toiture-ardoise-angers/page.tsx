import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import Steps from '@/components/Steps';
import Faq from '@/components/Faq';
import DevisBand from '@/components/DevisBand';
import PhoneLink from '@/components/PhoneLink';
import Jsonld from '@/components/Jsonld';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { business, ogImages, prestations, primaryPrestationSlug } from '@/lib/site';

const PATH = `/${primaryPrestationSlug}`;

export const metadata: Metadata = {
  title: 'Réfection toiture ardoise Angers (49) — Devis sous 48 h',
  description:
    'Réfection de toiture en ardoise d’Anjou à Angers : dépose complète, écran de sous-toiture, liteaunage, pose à crochet inox, points singuliers au plomb. Artisan RGE, décennale, devis gratuit sous 48 h.',
  alternates: { canonical: PATH },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Couverture Vasseur',
    url: PATH,
    title: 'Réfection de toiture en ardoise à Angers — Couverture Vasseur',
    description:
      'Dépose et couverture neuve en ardoise d’Anjou sur les toitures anciennes d’Angers. Déclaration préalable, dossier ABF, devis détaillé poste par poste.',
    images: ogImages,
  },
};

const faq = [
  {
    q: 'Peut-on refaire une toiture en ardoise en hiver ?',
    a: 'Oui, hors épisodes de gel prolongé, de neige ou de vent fort. On adapte le rythme et on ne laisse jamais une surface ouverte le soir : la toiture est bâchée et lestée chaque fin de journée. L’automne et l’hiver sont souvent plus faciles à planifier que le printemps.',
  },
  {
    q: 'Combien de temps dure un chantier de réfection en ardoise ?',
    a: 'Pour une maison de ville de 90 à 120 m² de toiture, comptez une à deux semaines de travail effectif, échafaudage compris. Une toiture complexe, avec noues, lucarnes et reprise de charpente, peut demander trois semaines. Le devis précise une durée et une date de démarrage.',
  },
  {
    q: 'Faut-il quitter le logement pendant les travaux ?',
    a: 'Non. On travaille par versant ou par bande, le logement reste habitable et hors d’eau. Il y a du bruit en journée et de la poussière dans les combles ; on protège les accès et on nettoie en fin de chantier.',
  },
  {
    q: 'L’ancienne charpente peut-elle être conservée ?',
    a: 'Le plus souvent, oui. Les charpentes anciennes en chêne d’Anjou sont saines sous la couverture. On les découvre à la dépose, on traite ou on renforce les pièces attaquées, et on ne remplace que ce qui doit l’être — sur devis complémentaire signé avant de poursuivre.',
  },
  {
    q: 'Quelle durée de vie attendre d’une ardoise d’Anjou naturelle ?',
    a: 'Une ardoise naturelle correctement posée tient couramment 80 à 100 ans. Ce sont les fixations et les zingueries qui vieillissent en premier : crochets, faîtage, noues, solins. Un entretien tous les ans ou deux prolonge nettement l’ensemble.',
  },
  {
    q: 'Que devient l’ancienne couverture déposée ?',
    a: 'Elle est triée sur place et évacuée en filière professionnelle. Les ardoises naturelles saines peuvent être conservées pour des reprises futures si vous le souhaitez. Les plaques anciennes suspectes de contenir de l’amiante font l’objet d’un traitement spécifique et déclaré.',
  },
  {
    q: 'Peut-on poser des panneaux solaires en même temps ?',
    a: 'C’est le bon moment. Sur une toiture neuve en ardoise, on prévoit les passages, les renforts et l’étanchéité des supports avant la pose de la couverture. En secteur ABF, l’intégration des panneaux est encadrée : on vérifie la faisabilité dès la visite.',
  },
  {
    q: 'Comment est gérée la pluie pendant le chantier ?',
    a: 'On n’ouvre que la surface qu’on peut refermer dans la journée. Un écran de sous-toiture est posé au fur et à mesure, et une bâche d’attente lestée couvre la zone en cours. En cas d’alerte météo, on stoppe la dépose et on sécurise.',
  },
];

const autres = prestations.filter((p) => p.slug !== primaryPrestationSlug).slice(0, 5);

export default function RefectionArdoise() {
  return (
    <>
      <Jsonld
        data={serviceSchema({
          name: 'Réfection de toiture en ardoise à Angers',
          description:
            'Dépose complète et couverture neuve en ardoise d’Anjou sur toitures anciennes à Angers et communes limitrophes : écran de sous-toiture, liteaunage, pose à crochet inox, points singuliers au plomb, zinguerie.',
          path: PATH,
        })}
      />
      <Jsonld data={faqSchema(faq)} />
      <Jsonld
        data={breadcrumbSchema([
          { name: 'Accueil', path: '/' },
          { name: 'Réfection de toiture en ardoise à Angers', path: PATH },
        ])}
      />

      {/* H1 + accroche */}
      <section className="tone-dark bg-nuit blueprint-grid border-b border-nuit/10">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:px-8 md:pb-14 md:pt-20">
          <nav aria-label="Fil d’Ariane" className="cartouche">
            <Link href="/" className="hover:text-papier">Accueil</Link>
            <span className="mx-2 text-papier/45">/</span>
            <span className="text-papier/60">Réfection toiture ardoise</span>
          </nav>
          <h1 className="mt-4 max-w-4xl text-[2.3rem] leading-[1.06] text-papier sm:text-5xl md:text-[3.8rem]">
            Réfection de toiture en ardoise à Angers
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-papier/80">
            Dépose complète et couverture neuve en ardoise d’Anjou, sur les
            toitures anciennes d’Angers et de sa couronne. Un devis détaillé poste
            par poste, les autorisations gérées avec vous, un chantier hors d’eau
            chaque soir.
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

      {/* Bloc devis en tête (« Devis gratuit sous 48 h ») */}
      <DevisBand
        title="À la visite, on relève avant de chiffrer"
        intro="Pour une réfection en ardoise, tout se joue sur le toit : pente, charpente, accès. Laissez vos coordonnées, Julien vient prendre les cotes cette semaine."
      />

      {/* Signes d'alerte — on ouvre sur le vécu du lecteur */}
      <Section
        eyebrow="Ce que le toit signale"
        title="Ce qu’une couverture d’ardoise montre avant de laisser entrer l’eau"
        intro="De la rue ou depuis les combles, ce sont toujours les mêmes symptômes qui annoncent une couverture en bout de course."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <ul>
              <li><strong>Ardoises glissées ou en escalier</strong> le long d’un versant : les crochets ou les clous ont lâché, la couverture n’est plus solidaire.</li>
              <li><strong>Ardoises qui feuillettent</strong>, se délaminent, sonnent creux : le schiste est en fin de vie, un remplacement ponctuel ne tiendra pas.</li>
              <li><strong>Auréoles brunes au plafond ou sous les combles</strong>, bois humide, odeur de moisi : l’eau entre déjà, souvent par une noue ou un solin.</li>
              <li><strong>Faîtage descellé</strong>, faîtières qui bougent, mortier tombé dans la gouttière : le point haut du toit n’est plus étanche au vent-pluie.</li>
              <li><strong>Solins fissurés</strong> autour d’une souche de cheminée ou contre un mur : le mortier a travaillé, l’eau s’infiltre au raccord.</li>
              <li><strong>Gouttières qui débordent</strong> ou se déforment, descentes disjointes : l’eau ruisselle sur la façade et sature le bas de la couverture.</li>
              <li><strong>Mousse épaisse en partie basse</strong> et sur le versant nord : l’ardoise reste humide, gèle, et les fixations se corrodent plus vite.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Définition */}
      <Section
        eyebrow="De quoi on parle"
        title="« Refaire un toit en ardoise » : deux chantiers, deux devis"
        intro="Le mot recouvre deux réalités très différentes, et le chiffrage n’a rien de commun de l’une à l’autre."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <p>
              Une <strong>réfection totale</strong>, c’est déposer l’intégralité
              de la couverture jusqu’au bois de charpente, remettre à neuf le
              support — écran de sous-toiture, liteaunage — puis reposer une
              ardoise neuve avec toutes ses fixations et ses zingueries. On
              repart d’une toiture saine pour cinquante ans.
            </p>
            <p>
              Une <strong>reprise ciblée</strong>, c’est intervenir sur une zone
              — un versant, une noue, un égout, un faîtage — en conservant le
              reste. C’est la bonne réponse quand la couverture est globalement
              en état et que le désordre est localisé.
            </p>
            <p>
              La visite technique sert justement à trancher entre les deux, sans
              vous vendre plus que nécessaire. Sur une maison ancienne d’Angers,
              l’âge des crochets et l’état du faîtage en disent souvent plus long
              que l’aspect des ardoises vues de la rue.
            </p>
          </div>
        </div>
      </Section>

      {/* Reprise vs réfection */}
      <Section
        eyebrow="La réponse franche"
        title="Reprendre une zone ou tout redéposer : où passe la ligne"
        intro="C’est la première question au téléphone. Voici comment on y répond, sans arrondir."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <p>
              <strong>On répare</strong> quand la couverture a moins de trente
              ans, que les ardoises sont saines, que le désordre est localisé
              (une noue, un égout, quelques rangs sous une lucarne) et que la
              charpente est sèche. Une reprise soignée coûte quelques centaines
              d’euros et fait gagner dix ans.
            </p>
            <p>
              <strong>On refait</strong> quand la corrosion des fixations est
              généralisée, qu’on remplace déjà des ardoises chaque année, que
              l’écran de sous-toiture est absent ou détruit, ou que la reprise
              dépasserait la moitié du prix d’une réfection. Rapiécer une toiture
              à bout de course, c’est payer deux fois.
            </p>
            <p>
              Ce qu’on ne fait pas : proposer une réfection totale « par
              sécurité » quand une reprise suffit. Le devis de visite dit
              clairement ce qui relève de l’un ou de l’autre, avec les deux
              chiffrages quand le cas est limite.
            </p>
          </div>
        </div>
      </Section>

      {/* Détail de l'intervention */}
      <Section
        eyebrow="Sous les ardoises"
        title="Ce qui se joue entre la charpente et la dernière ardoise"
        intro="Le vocabulaire du métier, expliqué. C’est ce que vous retrouverez, ligne par ligne, sur le devis."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <h3>La charpente, une fois le toit à nu</h3>
            <p>
              Couverture déposée, on sonde chaque chevron et chaque panne. Bois
              attaqué par les capricornes ou la mérule, about de chevron pourri à
              l’égout, entrait fendu : on traite par injection et pulvérisation,
              on double ou on remplace les pièces mortes, on recale les portées.
              Rien n’est refermé sans que vous ayez vu.
            </p>
            <h3>L’écran de sous-toiture et le liteaunage</h3>
            <p>
              On agrafe un <strong>écran de sous-toiture HPV</strong> (hautement
              perméable à la vapeur) sur les chevrons, recouvrement respecté,
              relevés soignés aux pénétrations. Par-dessus viennent les
              <strong> contre-lattes</strong> qui ménagent la lame d’air, puis le
              <strong> liteaunage</strong> en sapin traité, dont l’entraxe se
              cale au pureau de l’ardoise choisie. Un liteaunage régulier, c’est
              une couverture qui ne « vague » pas.
            </p>
            <h3>La pose de l’ardoise d’Anjou</h3>
            <p>
              Ardoise naturelle au format 32×22, posée <strong>au crochet inox</strong>
              {' '}sur liteaux, ou <strong>au clou</strong> sur voligeage pour les
              fortes pentes et les rives. Recouvrement adapté à la pente et à
              l’exposition, ardoises de rive taillées, doublis à l’égout. Le
              travail avance rang par rang, cordeau tendu.
            </p>
            <h3>Faîtage, noues, solins : les points singuliers</h3>
            <p>
              C’est là que se jouent les fuites : <strong>faîtage</strong> à sec
              sur closoir ventilé ou scellé au mortier bâtard selon le bâti,
              <strong> noues</strong> en zinc ou en ardoise tissée,
              <strong> solins</strong> et <strong>bandes de recouvrement</strong>
              {' '}au plomb contre les souches et les murs, <strong>closoirs</strong>
              {' '}de rive, sorties de ventilation et de chaudière étanchées une à
              une.
            </p>
            <h3>La zinguerie et l’évacuation des eaux</h3>
            <p>
              Gouttières demi-rondes ou chéneaux, dauphins en fonte, descentes en
              zinc : sections et pentes se calculent d’après la surface de toiture
              collectée. Soudure à l’étain, dilatation ménagée. Une évacuation
              sous-dimensionnée, c’est de l’eau qui repasse sous l’égout à chaque
              gros orage.
            </p>
          </div>
        </div>
      </Section>

      {/* Déroulé */}
      <Section
        eyebrow="Dans l’ordre"
        title="Du relevé sur le toit à la remise des clés, étape par étape"
        intro="Six étapes, dans cet ordre. Vous validez chacune avant qu’on passe à la suivante."
      >
        <Steps
          items={[
            { t: 'La visite de relevé', d: 'Montée sur toiture, mesures des versants, relevé des pentes et des points singuliers, inspection de la charpente sous combles, examen de l’accès et de la voirie. Photos à l’appui.' },
            { t: 'Le devis et les autorisations', d: 'Devis détaillé sous 48 h. On prépare la déclaration préalable et, en secteur protégé, le dossier pour l’Architecte des Bâtiments de France. Demande d’occupation du domaine public si l’échafaudage est sur rue.' },
            { t: 'L’installation et la dépose', d: 'Montage de l’échafaudage, protections, benne. Dépose de la couverture par versant, tri des matériaux, mise sous écran d’attente.' },
            { t: 'La charpente et l’écran', d: 'Traitement et reprises de charpente validés avec vous, pose de l’écran de sous-toiture, des contre-lattes et du liteaunage calibré.' },
            { t: 'La couverture et les points singuliers', d: 'Pose de l’ardoise à l’avancement, faîtage, noues, solins au plomb, zinguerie et descentes. Contrôle à l’eau des raccords sensibles.' },
            { t: 'Le nettoyage et la réception', d: 'Démontage de l’échafaudage, nettoyage des abords et des gouttières, évacuation des gravats. Tour du toit avec vous, remise des attestations de garantie et de la facture.' },
          ]}
        />
      </Section>

      {/* Coût */}
      <Section
        eyebrow="Ce qui creuse l’écart"
        title="Pourquoi deux réfections d’ardoise ne se chiffrent pas pareil"
        intro="Fourchette de référence à Angers en 2026 : 180 à 320 €/m² dépose comprise, en ardoise naturelle. Quatre paramètres expliquent l’écart."
      >
        <div className="grid gap-px overflow-hidden rounded-[3px] border border-nuit/12 bg-nuit/12 md:grid-cols-2">
          {[
            { t: 'La surface courante et la géométrie', d: 'Deux pans réguliers, ou toiture à la Mansart avec brisis, lucarnes, croupes et noues : le linéaire de points singuliers pèse plus lourd que les mètres carrés courants.' },
            { t: 'L’état réel de la charpente', d: 'Invisible avant la dépose. Un traitement et quelques greffes de chevrons se chiffrent en centaines d’euros ; une panne à remplacer, en milliers. Toujours sur devis signé avant exécution.' },
            { t: 'L’accès et l’échafaudage', d: 'Recul de cour, hauteur, échafaudage sur rue avec autorisation de voirie, portage manuel : c’est souvent ce poste qui écarte deux devis d’apparence identique.' },
            { t: 'Le choix de l’ardoise', d: 'Ardoise naturelle d’Anjou, ardoise d’importation, ardoise fibre-ciment de teinte proche : la fourniture varie du simple au double, et le mode de pose avec.' },
          ].map((f) => (
            <div key={f.t} className="bg-white p-6 md:p-7">
              <h3 className="font-display text-lg text-nuit">{f.t}</h3>
              <p className="mt-2 text-sm text-nuit/70">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Démarches administratives — intro */}
      <Section
        eyebrow="Avant la première ardoise"
        title="Les autorisations à décrocher avant de monter l’échafaudage"
        intro="Refaire un toit modifie l’aspect extérieur d’un bâtiment : il y a presque toujours une formalité d’urbanisme. On la prend en charge."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <p>
              Trois cas de figure se cumulent souvent à Angers : la
              <strong> déclaration préalable</strong> de travaux, l’avis de
              l’<strong>Architecte des Bâtiments de France</strong> dans le centre
              historique, et le passage en <strong>assemblée générale</strong> si
              le bien est en copropriété. Ajoutez, si l’échafaudage est sur
              trottoir, une <strong>autorisation d’occupation du domaine public</strong>.
              Le devis intègre les délais correspondants.
            </p>
          </div>
        </div>
      </Section>

      {/* DP + ABF */}
      <Section
        eyebrow="Mairie & Bâtiments de France"
        title="La déclaration préalable, puis l’œil de l’Architecte des Bâtiments de France"
        intro="Ce qui se dépose à la mairie d’Angers, et ce qui change quand le bien est dans le périmètre protégé."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <p>
              La <strong>déclaration préalable</strong> (formulaire Cerfa 13703)
              se dépose au service urbanisme de la Ville d’Angers. Le délai
              d’instruction courant est d’un mois, porté à deux mois dès qu’un
              avis de l’ABF est requis. On y joint un plan de situation, des
              photos, une notice sur les matériaux et les teintes.
            </p>
            <p>
              Une large part du centre d’Angers — Doutre, cité, quartier de la
              cathédrale — relève d’un <strong>Site patrimonial remarquable</strong>.
              L’<strong>ABF</strong> y vérifie que l’ardoise, la teinte, le type
              de faîtage, les zingueries et les châssis de toit respectent la
              cohérence du secteur. En pratique, l’ardoise naturelle et un
              faîtage traditionnel passent sans difficulté ; c’est le PVC, les
              teintes claires ou les grandes verrières qui bloquent. On cadre ces
              choix avec vous avant le dépôt.
            </p>
          </div>
        </div>
      </Section>

      {/* Copropriété */}
      <Section
        eyebrow="Parties communes"
        title="Quand le toit appartient à toute la copropriété"
        intro="La toiture est une partie commune : la décision ne vous appartient pas seul, mais vous pouvez la préparer."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <p>
              Les travaux de toiture se votent en <strong>assemblée générale</strong>,
              à la majorité de l’article 25 (voire de l’article 24 pour un
              entretien courant). Il faut donc inscrire la question à l’ordre du
              jour, avec un ou plusieurs devis transmis au syndic dans les délais
              de convocation. Nous fournissons un devis lisible par des
              non-spécialistes, avec le détail des postes et les garanties, et
              nous pouvons intervenir en AG ou devant le conseil syndical pour
              présenter le chantier et répondre aux questions.
            </p>
          </div>
        </div>
      </Section>

      {/* Échafaudage domaine public */}
      <Section
        eyebrow="Sur le trottoir"
        title="Poser un échafaudage sur la voie publique à Angers"
        intro="Dans les rues étroites du centre, l’échafaudage empiète presque toujours sur le trottoir ou une place de stationnement."
      >
        <div className="panneau rounded-[4px] p-6 md:p-10">
          <div className="prose-vasseur">
            <p>
              Il faut alors une <strong>autorisation d’occupation temporaire du
              domaine public</strong>, demandée auprès de la Ville d’Angers, avec
              un plan d’implantation, la durée prévue et parfois la neutralisation
              d’une place de stationnement (arrêté et panneaux). Une redevance
              journalière s’applique. On dépose la demande, on gère la
              signalisation et le balisage piéton, et on prévoit un tunnel de
              protection si le passage doit être maintenu.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        eyebrow="Propre à ce chantier"
        title="Saison, durée, charpente, déchets : les questions de la réfection en ardoise"
        intro="Les réponses qui ne valent que pour ce type de chantier — différentes de celles de l’accueil."
      >
        <Faq items={faq} />
      </Section>

      {/* Maillage interne */}
      <Section
        eyebrow="Poursuivre la lecture"
        title="Ce qu’une réfection appelle souvent après elle"
        intro="Zinguerie, fenêtre de toit, isolation : une couverture neuve ouvre d’autres chantiers. Et le contexte angevin a sa propre page."
      >
        <ul className="grid gap-px overflow-hidden rounded-[3px] border border-nuit/12 bg-nuit/12 sm:grid-cols-2">
          {autres.map((p) => (
            <li key={p.slug} className="bg-white p-5">
              <Link href="/#prestations" className="font-display text-lg text-nuit hover:text-encre">
                {p.titre}
              </Link>
              <p className="mt-1 text-sm text-nuit/65">{p.resume}</p>
            </li>
          ))}
          <li className="bg-white p-5">
            <Link href="/couvreur-angers" className="font-display text-lg text-nuit hover:text-encre">
              Couvreur à Angers — le contexte local
            </Link>
            <p className="mt-1 text-sm text-nuit/65">
              Bâti ancien, secteur patrimonial, contraintes d’accès du centre.
            </p>
          </li>
          <li className="bg-white p-5">
            <Link href="/#zone" className="font-display text-lg text-nuit hover:text-encre">
              La zone d’intervention
            </Link>
            <p className="mt-1 text-sm text-nuit/65">
              Angers, Avrillé, Beaucouzé, Les Ponts-de-Cé, Trélazé,
              Saint-Barthélemy-d’Anjou, Écouflant.
            </p>
          </li>
        </ul>
      </Section>

      {/* Bloc devis (bas) */}
      <DevisBand
        id="devis-bas"
        title="Faire monter Julien sur votre toit"
        intro="Un métré sérieux sur place, un devis clair sous 48 h, les autorisations gérées. C’est ainsi que démarre une réfection en ardoise."
      />
    </>
  );
}
