/** Injecte un bloc JSON-LD dans le HTML servi (rendu côté serveur). */
export default function Jsonld({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Données statiques générées au build — pas d'entrée utilisateur.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
