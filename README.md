# Couverture Vasseur — site vitrine

Site **Next.js (App Router)** pour *Couverture Vasseur*, artisan couvreur zingueur
à Angers (Anjou, Maine-et-Loire, 49). Rendu **statique / serveur** : tout le
contenu est présent dans le HTML servi (aucune coquille vide chargée en JS).

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production (SSG)
npm start        # sert le build
```

Node ≥ 18.18. Copier `.env.example` en `.env.local` et renseigner au moins
`NEXT_PUBLIC_SITE_URL`.

## Arborescence

```
couverture-vasseur/
├── app/
│   ├── layout.tsx                       en-tête + pied de page, polices, métadonnées globales,
│   │                                    JSON-LD RoofingContractor (site entier)
│   ├── page.tsx                         PAGE 1 — Accueil (H1 « Couvreur zingueur à Angers »)
│   ├── refection-toiture-ardoise-angers/
│   │   └── page.tsx                     PAGE 2 — Prestation (H1 « Réfection de toiture en ardoise à Angers »)
│   ├── couvreur-angers/
│   │   └── page.tsx                     PAGE 3 — Ville (H1 « Couvreur à Angers : toitures anciennes… »)
│   ├── mentions-legales/page.tsx        page légale (noindex), maillage footer
│   ├── api/devis/route.ts               réception du formulaire (Resend si configuré, sinon log)
│   ├── opengraph-image.tsx              image Open Graph 1200×630 générée au build
│   ├── icon.svg                         favicon
│   ├── sitemap.ts / robots.ts           sitemap.xml + robots.txt
│   ├── not-found.tsx                    page 404
│   └── globals.css                      thème (variables CSS), utilitaires, .prose-vasseur
├── components/
│   ├── SiteHeader.tsx / SiteFooter.tsx  navigation + maillage interne
│   ├── RoofSection.tsx                  SIGNATURE — coupe technique dessinée d’une toiture ardoise
│   ├── DevisBand.tsx / DevisForm.tsx    bloc « Devis gratuit sous 48 h » (haut + bas de page)
│   ├── Section.tsx / Steps.tsx / Faq.tsx
│   ├── Figure.tsx                       enveloppe next/image, attribut alt OBLIGATOIRE
│   ├── PhoneLink.tsx                    lien tel: réutilisé partout
│   └── Jsonld.tsx                       injection JSON-LD côté serveur
├── lib/
│   ├── site.ts                          coordonnées, chiffres de confiance, zone, catalogue
│   └── schema.ts                        constructeurs schema.org
└── public/
    ├── logo-couverture-vasseur.png      logo client officiel (RGBA transparent, détouré)
    ├── logo-og.png                      version réduite du logo, embarquée dans l'image OG
    └── img/*.svg                        schémas de chantier (relevés de principe, libres de droits)
```

## Direction artistique

Le brief demandait de **ne pas** retomber sur le gris ardoise attendu pour
l’Anjou. Parti pris : l’univers de **l’épure du couvreur** — le plan de
couverture, le relevé coté, les lignes de pli du zinc.

| Rôle | Valeur |
| --- | --- |
| Fond dominant | bleu-nuit `#0C131C` (77 % du logo) |
| Encre / accent | bleu `#0061C6`, bleu clair `#6BA6FF` sur fond sombre |
| Papier | `#EEF1F5` — panneaux clairs pour les longs textes |
| Micro-accent | laiton `#C08A3E` (clin d’œil zinguerie), repères et soulignés |
| Titres | **Fraunces** (serif à caractère, optique) |
| Texte | **Inter** |
| Cotes / repères / téléphone | **Space Mono** |

**Signature :** `RoofSection.tsx`, une coupe technique légendée d’une toiture en
ardoise d’Anjou (charpente, écran de sous-toiture, liteaunage, ardoise à crochet,
faîtage ventilé, noue, souche, fenêtre de toit), tracée en trait bleu et animée
au chargement (désactivée si `prefers-reduced-motion`).

## Conformité SEO (vérifiée page par page)

- **1 seul `<h1>` par page**, contenant métier + ville.
- **`<title>`** métier + ville + département ; **meta description** 150–200 car., jamais absente.
- **H2** : 13 (accueil), 14 (prestation), 12 (ville) — hiérarchie H2/H3 réelle.
- **H3** accueil : 37 (fourchette 19–38).
- **schema.org** : `RoofingContractor` complet (PostalAddress, GeoCoordinates,
  OpeningHoursSpecification, AggregateRating, OfferCatalog / Offer / Service),
  `Service`, `FAQPage` sur les 3 pages, `BreadcrumbList` pages 2 et 3.
- **`lang="fr"`**, `<link rel="canonical">` par page, **Open Graph complet**
  (type, locale, site_name, url, title, description, image) sur les 3 pages.
- **`alt`** obligatoire sur chaque image (imposé par la signature de `Figure`).
- **Lien `tel:`** dans l’en-tête, le hero, les blocs devis et le pied de page —
  sur toutes les pages.
- Contenu rendu **SSG** : présent dans le HTML servi.

## À remplacer avant mise en ligne réelle

1. **Logo — intégré.** `public/logo-couverture-vasseur.png` est le logo client
   officiel (détouré de son cadre transparent, ratio ~2,07:1). Il est dessiné
   en bleu-nuit : dans l’en-tête et le pied de page il est posé sur une plaque
   claire (`bg-papier`) façon cartouche de plan, et l’image Open Graph embarque
   `public/logo-og.png` sur le même fond clair. Le favicon (`app/icon.svg`)
   reprend le motif du toit du logo. Ne pas reposer le logo directement sur le
   fond nuit : le texte bleu-nuit y devient illisible.
2. **`lib/site.ts`** — téléphone, e-mail, adresse, SIRET, n° Qualibat et
   décennale, nombre et note d’avis : valeurs **crédibles mais inventées**.
3. **Photos de chantier** — les fichiers `public/img/chantier-*.svg` sont des
   relevés de principe. Les remplacer par de vraies photos avant/après
   (`next/image`, `alt` obligatoire) quand elles sont disponibles.
4. **`NEXT_PUBLIC_SITE_URL`** — domaine définitif (canonical, OG, sitemap).
   Tant qu’il n’est pas défini, le site utilise automatiquement le domaine de
   production Vercel (`VERCEL_PROJECT_PRODUCTION_URL`).
5. **Envoi des devis** — renseigner `RESEND_API_KEY`, `DEVIS_TO_EMAIL`,
   `DEVIS_FROM_EMAIL`. Sans clé, la demande est journalisée et l’utilisateur
   reçoit quand même une confirmation ; le site reste déployable.

## Dépôt GitHub

Avec GitHub CLI (`winget install --id GitHub.cli` puis `gh auth login`) :

```bash
cd ~/couverture-vasseur
git branch -M main
gh repo create couverture-vasseur --private --source=. --remote=origin --push
```

Sans `gh` : créer un dépôt vide sur github.com/new (nom `couverture-vasseur`), puis :

```bash
cd ~/couverture-vasseur
git branch -M main
git remote add origin https://github.com/<utilisateur>/couverture-vasseur.git
git push -u origin main
```

## Déploiement Vercel

```bash
cd ~/couverture-vasseur
npx vercel login            # authentification interactive (navigateur / code e-mail)
npx vercel --prod           # 1er run : accepter les valeurs par défaut (framework Next.js détecté)
```

Le premier déploiement de production a déjà des URL canoniques/OG correctes
(fallback sur le domaine Vercel). Pour figer un domaine explicite :

```bash
npx vercel env add NEXT_PUBLIC_SITE_URL production   # coller l’URL de prod, ex. https://couverture-vasseur.vercel.app
npx vercel --prod                                     # redéployer pour prendre en compte la variable
```

Alternative sans CLI : tableau de bord Vercel → *New Project* → importer le
dépôt GitHub → framework **Next.js** auto-détecté → *Deploy*.
