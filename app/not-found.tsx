import Link from 'next/link';
import PhoneLink from '@/components/PhoneLink';
import { primaryPrestationSlug } from '@/lib/site';

export default function NotFound() {
  return (
    <section className="blueprint-grid">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
        <p className="cartouche">Erreur 404</p>
        <h1 className="mt-4 font-display text-4xl text-nuit md:text-5xl">
          Cette page n’est pas au plan
        </h1>
        <p className="mx-auto mt-4 max-w-prose2 text-nuit/70">
          Le lien que vous avez suivi ne mène nulle part. Revenez à l’accueil ou
          appelez-nous directement, on vous oriente.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-[2px] bg-encre px-5 py-3 font-mono text-[0.78rem] uppercase tracking-label text-white hover:bg-encre-fonce"
          >
            Retour à l’accueil
          </Link>
          <PhoneLink variant="ghost" />
        </div>
        <nav className="mt-10 font-mono text-[0.75rem] uppercase tracking-label text-nuit/70">
          <Link href={`/${primaryPrestationSlug}`} className="hover:text-encre">
            Réfection ardoise
          </Link>
          <span className="mx-3 text-nuit/55">·</span>
          <Link href="/couvreur-angers" className="hover:text-encre">
            Couvreur à Angers
          </Link>
        </nav>
      </div>
    </section>
  );
}
