// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://elm-labs.github.io',
  base: '/ElmLabsLanding',
  vite: {
    plugins: [tailwindcss()]
  }
});