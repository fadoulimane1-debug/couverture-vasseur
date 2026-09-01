import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt =
  'Couverture Vasseur — couvreur zingueur à Angers, spécialiste de l’ardoise d’Anjou';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Le logo (dessiné en bleu-nuit) est encodé en data URI et posé sur une
// plaque claire dans la composition, pour rester lisible sur le fond nuit.
const logoDataUri = `data:image/png;base64,${readFileSync(
  join(process.cwd(), 'public', 'logo-og.png'),
).toString('base64')}`;

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
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              background: '#EEF1F5',
              borderRadius: 12,
              padding: '16px 24px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoDataUri} width={300} height={145} alt="" />
          </div>
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
