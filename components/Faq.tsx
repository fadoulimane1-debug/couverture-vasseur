/**
 * Liste de questions/réponses. Le balisage FAQPage (schema.org) est ajouté
 * séparément au niveau de la page via <Jsonld />.
 */
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-ciel/15 border-y border-ciel/15">
      {items.map((it) => (
        <article key={it.q} className="py-6">
          <h3 className="text-lg text-papier">{it.q}</h3>
          <p className="mt-2 max-w-prose2 text-papier/75">{it.a}</p>
        </article>
      ))}
    </div>
  );
}
