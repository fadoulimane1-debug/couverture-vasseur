import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        nuit: {
          DEFAULT: '#0C131C',
          2: '#131E2B',
          3: '#1B2A3B',
        },
        encre: {
          DEFAULT: '#0061C6',
          fonce: '#004A99',
        },
        ciel: '#6BA6FF',
        papier: {
          DEFAULT: '#EEF1F5',
          2: '#E2E7EE',
        },
        laiton: '#C08A3E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        label: '0.18em',
      },
      maxWidth: {
        prose2: '68ch',
      },
      keyframes: {
        draw: {
          from: { strokeDashoffset: '1200' },
          to: { strokeDashoffset: '0' },
        },
        riseIn: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        draw: 'draw 2s ease-out forwards',
        riseIn: 'riseIn 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
