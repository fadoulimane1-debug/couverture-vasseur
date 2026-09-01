/**
 * Liste de questions/réponses. Le balisage FAQPage (schema.org) est ajouté
 * séparément au niveau de la page via <Jsonld />.
 */
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-nuit/12 border-y border-nuit/12">
      {items.map((it) => (
        <article key={it.q} className="py-6">
          <h3 className="text-lg text-nuit">{it.q}</h3>
          <p className="mt-2 max-w-prose2 text-nuit/70">{it.a}</p>
        </article>
      ))}
    </div>
  );
}
