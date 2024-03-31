import react from '@vitejs/plugin-react';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { defineConfig } from 'vite';
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

const KEY = join(__dirname, '/.cert/privkey.pem');
const CERT = join(__dirname, '/.cert/cert.pem');

let https;
if (existsSync(KEY) && existsSync(CERT)) {
  https = {
    key: readFileSync('.cert/privkey.pem'),
    cert: readFileSync('.cert/cert.pem'),
  };
}

const manifest: Partial<ManifestOptions> = {
  theme_color: '#2c2155',
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
    modulePreload: {
      resolveDependencies: (url, deps, context) => {
        return [];
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes('@firebase')) return 'firebase';
          if (id.includes('@yudiel/react-qr-scanner')) return 'qr-scanner';
          if (id.includes('simple-icons')) return 'simple-icons';
          if (id.includes('node_modules')) return 'vendor';

          return 'index';
        },
      },
    },
    sourcemap: true,
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
