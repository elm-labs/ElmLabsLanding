// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://elmlabs.ai',
  server: {
    host: true,
    allowedHosts: ['dev-server', '.tail9a4887.ts.net'],
  },
});
