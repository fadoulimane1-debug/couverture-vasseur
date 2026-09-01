/**
 * FAQ en accordéon natif (<details>) : question visible, réponse repliée par
 * défaut. Aucun JavaScript, contenu présent dans le HTML servi (lu par les
 * moteurs et par le balisage FAQPage ajouté séparément via <Jsonld />).
 */
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((it) => (
        <details key={it.q} name="faq">
          <summary>
            <h3>{it.q}</h3>
            <svg className="chev" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </summary>
          <p className="answer">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
