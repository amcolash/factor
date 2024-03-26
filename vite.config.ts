import { defineConfig } from 'vite';
import { readFileSync } from 'fs';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: {
    host: true,
    https: {
      key: readFileSync('.cert/privkey.pem'),
      cert: readFileSync('.cert/cert.pem'),
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      // cache all imports
      workbox: {
        globPatterns: ['**/*'],
      },
      // cache static assets in the public folder
      includeAssets: ['**/*'],
    }),
  ],
});
