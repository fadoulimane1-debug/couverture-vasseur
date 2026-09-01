/**
 * Étapes réellement ordonnées (déroulé de chantier) : ici la numérotation
 * 01 → 06 porte une information — l'ordre de passage.
 */
export default function Steps({
  items,
}: {
  items: { t: string; d: string }[];
}) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-[3px] border border-ciel/20 bg-ciel/20 md:grid-cols-2">
      {items.map((it, i) => (
        <li key={it.t} className="bg-nuit-2 p-6">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-laiton">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-lg text-papier">{it.t}</h3>
          </div>
          <p className="mt-2 text-[0.95rem] text-papier/70">{it.d}</p>
        </li>
      ))}
    </ol>
  );
}
