import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt =
  'Couverture Vasseur — couvreur zingueur à Angers, spécialiste de l’ardoise d’Anjou';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0C131C',
          padding: 72,
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            color: '#6BA6FF',
            fontSize: 26,
            letterSpacing: 6,
            textTransform: 'uppercase',
          }}
        >
          <svg width="54" height="40" viewBox="0 0 54 40" fill="none">
            <path d="M4 34 L27 6 L50 34" stroke="#6BA6FF" strokeWidth="4" />
            <path d="M14 34 L27 18 L40 34" stroke="#6BA6FF" strokeWidth="4" />
          </svg>
          Couverture Vasseur
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ color: '#EEF1F5', fontSize: 76, lineHeight: 1.05 }}>
            Couvreur zingueur à Angers
          </div>
          <div style={{ color: '#6BA6FF', fontSize: 34 }}>
            Réfection de toiture en ardoise d’Anjou · toitures anciennes
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 40,
            color: '#EEF1F5',
            fontSize: 24,
            borderTop: '1px solid rgba(107,166,255,0.4)',
            paddingTop: 24,
          }}
        >
          <span>RGE Qualibat</span>
          <span>Garantie décennale</span>
          <span>Devis gratuit sous 48 h</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
