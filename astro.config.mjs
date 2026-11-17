// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://elmlabs.ai',
  server: {
    host: true,
    allowedHosts: ['dev-server', '.tail9a4887.ts.net'],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});