import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Le dossier du projet est la racine du traçage de fichiers (un autre
  // lockfile existe plus haut dans l'arborescence de l'utilisateur).
  outputFileTracingRoot: __dirname,
  images: {
    // Le site n'utilise plus que des photographies (JPEG) servies via next/image,
    // optimisées à la volée en AVIF/WebP.
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};

export default nextConfig;
