import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // В dev SW выключен, чтобы не мешал HMR; включить для проверки оффлайна
      devOptions: { enabled: false },
      manifest: {
        name: 'Ambassador',
        short_name: 'Ambassador',
        lang: 'ru',
        display: 'standalone',
        start_url: '/',
        theme_color: '#2c3e50',
        background_color: '#ffffff',
        icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
      },
    }),
  ],
  server: { port: 5173 },
});
