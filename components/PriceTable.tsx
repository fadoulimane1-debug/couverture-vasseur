/**
 * Fourchettes de prix scannables : libellé + montant en gros caractères,
 * une ligne par poste. Les lignes s'empilent en carte sur petit écran.
 */
export default function PriceTable({
  rows,
}: {
  rows: { poste: string; prix: string }[];
}) {
  return (
    <div role="table" aria-label="Fourchettes de prix indicatives">
      {rows.map((r) => (
        <div role="row" key={r.poste} className="price-row">
          <span role="cell" className="text-nuit">
            {r.poste}
          </span>
          <span role="cell" className="val">
            {r.prix}
          </span>
        </div>
      ))}
    </div>
  );
}
