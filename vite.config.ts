import { defineConfig } from 'vite';
import { readFileSync, existsSync } from 'fs';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa';

const KEY = './cert/privkey.pem';
const CERT = './cert/cert.pem';

let https;
if (existsSync(KEY) && existsSync(CERT)) {
  https = {
    key: readFileSync('.cert/privkey.pem'),
    cert: readFileSync('.cert/cert.pem'),
  };
}

const manifest: Partial<ManifestOptions> = {
  theme_color: '#4b787d',
  background_color: '#051524',
  display: 'standalone',
  start_url: '/factor/',
  id: 'com.amcolash.factor',
  name: 'Factor',
  short_name: 'Factor',
  description: '2 Factor Authenticator',
  icons: [
    {
      src: './icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: './icon-256x256.png',
      sizes: '256x256',
      type: 'image/png',
    },
    {
      src: './icon-384x384.png',
      sizes: '384x384',
      type: 'image/png',
    },
    {
      src: './icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
};

export default defineConfig({
  base: '/factor/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          firebase: ['@firebase/app', '@firebase/auth', '@firebase/firestore'],
          'qr-scanner': ['@yudiel/react-qr-scanner'],
          'simple-icons': ['simple-icons'],
        },
      },
    },
  },
  server: {
    host: true,
    https,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      workbox: {
        // cache all imports
        globPatterns: ['**/*'],
        maximumFileSizeToCacheInBytes: 10 * 1000 * 1000, // 10mb
      },
      // cache static assets in the public folder
      includeAssets: ['**/*'],
      // add web manifest
      manifest,
    }),
  ],
});
