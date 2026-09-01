import type { Metadata } from 'next';
import Link from 'next/link';
import { business } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du site de Couverture Vasseur, artisan couvreur zingueur à Angers (49) : éditeur, hébergement, propriété intellectuelle, données personnelles.',
  alternates: { canonical: '/mentions-legales' },
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="cartouche">Informations légales</p>
      <h1 className="mt-3 font-display text-4xl text-papier">Mentions légales</h1>

      <div className="panneau mt-8 rounded-[4px] p-6 md:p-10">
        <div className="prose-vasseur">
          <h2>Éditeur du site</h2>
          <p>
            {business.legalName} — {business.baseline}.
            <br />
            Siège : {business.address.street}, {business.address.postalCode}{' '}
            {business.address.city}.
            <br />
            Téléphone :{' '}
            <a href={business.phoneHref}>{business.phoneDisplay}</a> — e-mail :{' '}
            <a href={`mailto:${business.email}`}>{business.email}</a>.
            <br />
            SIRET, n° TVA intracommunautaire et assurance décennale ({business.trust.decennale}) communiqués sur devis. Certification{' '}
            {business.trust.qualibat}.
          </p>
          <p className="text-sm">
            Les numéros d’immatriculation, l’assurance et les certifications
            présentés sur ce site sont des exemples à remplacer par les
            informations réelles de l’entreprise avant mise en ligne.
          </p>

          <h2>Directeur de la publication</h2>
          <p>{business.founderName}.</p>

          <h2>Hébergement</h2>
          <p>
            Site hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
            États-Unis — <a href="https://vercel.com">vercel.com</a>.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des textes, schémas techniques et illustrations de ce site
            est la propriété de {business.name}. Toute reproduction sans
            autorisation est interdite. Le logo est une marque de l’entreprise.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les informations saisies dans le formulaire de demande de devis (nom,
            téléphone, e-mail, commune, description du projet) sont utilisées
            uniquement pour répondre à la demande et établir un devis. Elles ne
            sont ni cédées ni revendues. Conformément au RGPD, vous disposez d’un
            droit d’accès, de rectification et de suppression en écrivant à{' '}
            <a href={`mailto:${business.email}`}>{business.email}</a>.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site ne dépose pas de cookie de mesure d’audience ni de traceur
            publicitaire.
          </p>
        </div>
      </div>

      <p className="mt-8 font-mono text-[0.75rem] uppercase tracking-label text-nuit/70">
        <Link href="/" className="hover:text-encre">
          ← Retour à l’accueil
        </Link>
      </p>
    </section>
  );
}
