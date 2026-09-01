/**
 * Signature du site : coupe technique dessinée d'une toiture en ardoise d'Anjou.
 * Trait bleu sur fond nuit, cotée et légendée avec le vocabulaire du métier.
 * SVG statique, présent dans le HTML servi. Le tracé s'anime au chargement
 * (désactivé si l'utilisateur a demandé moins d'animations).
 */
export default function RoofSection({ className = '' }: { className?: string }) {
  return (
    <figure className={className}>
      <svg
        viewBox="0 0 860 520"
        role="img"
        aria-label="Coupe d'une toiture en ardoise d'Anjou : mur en maçonnerie ancienne, charpente et chevrons, écran de sous-toiture, liteaunage, ardoise posée à crochet inox, faîtage avec closoir ventilé, gouttière zinc à l'égout, souche de cheminée avec solin plomb et fenêtre de toit."
        className="h-auto w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <pattern id="hatch" width="7" height="7" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Contour principal — s'anime au chargement */}
        <g className="draw" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="150,330 430,90 710,330" />
          <line x1="150" y1="330" x2="150" y2="442" />
          <line x1="710" y1="330" x2="710" y2="442" />
          <line x1="150" y1="330" x2="710" y2="330" />
        </g>

        {/* Sol */}
        <g stroke="currentColor" strokeWidth="1">
          <line x1="96" y1="442" x2="770" y2="442" strokeOpacity="0.8" />
          <rect x="96" y="442" width="674" height="8" fill="url(#hatch)" stroke="none" />
        </g>

        {/* Épaisseur du mur gauche + hachures maçonnerie */}
        <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.75" fill="none">
          <line x1="138" y1="330" x2="138" y2="442" />
          <line x1="138" y1="330" x2="150" y2="330" />
          <rect x="138" y="332" width="12" height="108" fill="url(#hatch)" stroke="none" />
        </g>

        {/* Complexe de couverture sur le rampant gauche */}
        <g fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.85">
          {/* écran de sous-toiture */}
          <line x1="155.9" y1="336.8" x2="435.9" y2="96.8" strokeDasharray="4 3" />
          {/* sous-face des chevrons */}
          <line x1="165.6" y1="348.2" x2="445.6" y2="108.2" />
          {/* liteaux (section) */}
          <line x1="206" y1="282" x2="215.1" y2="292.6" />
          <line x1="248" y1="246" x2="257.1" y2="256.6" />
          <line x1="290" y1="210" x2="299.1" y2="220.6" />
          <line x1="332" y1="174" x2="341.1" y2="184.6" />
          <line x1="374" y1="138" x2="383.1" y2="148.6" />
          {/* chevrons (section) */}
          <line x1="197.85" y1="300.83" x2="207.6" y2="312.2" strokeWidth="1.4" />
          <line x1="267.85" y1="240.83" x2="277.6" y2="252.2" strokeWidth="1.4" />
          <line x1="337.85" y1="180.83" x2="347.6" y2="192.2" strokeWidth="1.4" />
          <line x1="407.85" y1="120.83" x2="417.6" y2="132.2" strokeWidth="1.4" />
        </g>

        {/* Pureaux d'ardoise sur le rampant gauche */}
        <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.55">
          <line x1="178" y1="309" x2="182.9" y2="314.7" />
          <line x1="204" y1="287" x2="208.9" y2="292.7" />
          <line x1="230" y1="264" x2="234.9" y2="269.7" />
          <line x1="256" y1="242" x2="260.9" y2="247.7" />
          <line x1="282" y1="220" x2="286.9" y2="225.7" />
          <line x1="308" y1="197" x2="312.9" y2="202.7" />
          <line x1="334" y1="175" x2="338.9" y2="180.7" />
          <line x1="360" y1="152" x2="364.9" y2="157.7" />
          <line x1="386" y1="130" x2="390.9" y2="135.7" />
          <line x1="412" y1="108" x2="416.9" y2="113.7" />
        </g>

        {/* Faîtage + closoir ventilé */}
        <g fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M409 102 Q430 78 451 102" />
          <line x1="414" y1="108" x2="446" y2="108" strokeWidth="1" strokeDasharray="2 3" strokeOpacity="0.7" />
        </g>

        {/* Gouttière zinc demi-ronde + planche de rive */}
        <g fill="none" stroke="currentColor" strokeWidth="1.4">
          <line x1="150" y1="330" x2="150" y2="348" />
          <path d="M140 346 A11 11 0 0 0 162 346" />
        </g>

        {/* Souche de cheminée + solin sur rampant droit */}
        <g fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M520 176 L520 116 L560 116 L560 176" />
          <line x1="514" y1="112" x2="566" y2="112" />
          <path d="M512 182 l14 -12 l10 8" strokeWidth="1" strokeOpacity="0.8" />
        </g>

        {/* Fenêtre de toit sur rampant droit */}
        <g fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M600 238 L645 277 L637 284 L592 245 Z" />
          <line x1="596" y1="241.5" x2="641" y2="280.5" strokeWidth="1" strokeOpacity="0.7" />
        </g>

        {/* Annotation de pente */}
        <g fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.8">
          <line x1="150" y1="330" x2="238" y2="330" strokeDasharray="3 3" />
          <path d="M232 330 A82 82 0 0 0 197 268" />
        </g>

        {/* Légendes — vocabulaire métier */}
        <g
          fontFamily="ui-monospace, 'SFMono-Regular', Menlo, monospace"
          fontSize="11"
          letterSpacing="0.06em"
          fill="currentColor"
        >
          {/* leaders */}
          <g stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5">
            <line x1="252" y1="123" x2="300" y2="205" />
            <line x1="252" y1="161" x2="250" y2="255" />
            <line x1="252" y1="199" x2="299" y2="220" />
            <line x1="252" y1="237" x2="278" y2="252" />
            <line x1="252" y1="369" x2="150" y2="344" />
            <line x1="252" y1="401" x2="144" y2="402" />
            <line x1="432" y1="60" x2="431" y2="86" />
            <line x1="470" y1="150" x2="540" y2="140" />
            <line x1="470" y1="299" x2="620" y2="262" />
            <line x1="470" y1="345" x2="690" y2="330" />
            <line x1="214" y1="300" x2="210" y2="286" />
          </g>

          <text x="248" y="122" textAnchor="end">ARDOISE D’ANJOU · POSE À CROCHET INOX</text>
          <text x="248" y="160" textAnchor="end">ÉCRAN DE SOUS-TOITURE HPV</text>
          <text x="248" y="198" textAnchor="end">LITEAUNAGE SAPIN 40 × 18</text>
          <text x="248" y="236" textAnchor="end">CHEVRON — CHARPENTE CONSERVÉE</text>
          <text x="248" y="368" textAnchor="end">GOUTTIÈRE ZINC DEMI-RONDE · ÉGOUT</text>
          <text x="248" y="400" textAnchor="end">MUR — TUFFEAU / SCHISTE ANCIEN</text>
          <text x="432" y="52" textAnchor="middle">FAÎTAGE + CLOSOIR VENTILÉ</text>
          <text x="474" y="150" textAnchor="start">SOUCHE + SOLIN EN PLOMB</text>
          <text x="474" y="299" textAnchor="start">FENÊTRE DE TOIT — RACCORD ARDOISE</text>
          <text x="474" y="345" textAnchor="start">POINTS SINGULIERS TRAITÉS AU PLOMB</text>
          <text x="360" y="250" textAnchor="middle" fillOpacity="0.85">VOLUME SOUS RAMPANT</text>
          <text x="196" y="312" textAnchor="middle">PENTE ≈ 90 % · 42°</text>
        </g>

        {/* Cartouche façon plan */}
        <g>
          <rect x="596" y="452" width="256" height="56" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1" />
          <line x1="596" y1="474" x2="852" y2="474" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1" />
          <text x="606" y="467" fontFamily="ui-monospace, Menlo, monospace" fontSize="10" letterSpacing="0.12em" fill="currentColor">
            COUPE — TOITURE ARDOISE
          </text>
          <text x="606" y="490" fontFamily="ui-monospace, Menlo, monospace" fontSize="10" letterSpacing="0.12em" fill="currentColor" fillOpacity="0.75">
            COUVERTURE VASSEUR · ANGERS 49
          </text>
        </g>
      </svg>
      <figcaption className="sr-only">
        Coupe technique d’une toiture en ardoise d’Anjou telle que nous la
        remontons à Angers : charpente conservée, écran de sous-toiture,
        liteaunage, ardoise à crochet inox, faîtage ventilé, zinguerie à l’égout
        et points singuliers traités au plomb.
      </figcaption>
    </figure>
  );
}
