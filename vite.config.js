import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  base: '/trexui/', // <-- Set your base path here
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'T-REX-UI',
        short_name: 'T-REX-UI',
        description: 'T-REX-UI Progressive Web App using Vite',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/trexui/',
        icons: [
          {
            src: '/trexui/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/trexui/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
