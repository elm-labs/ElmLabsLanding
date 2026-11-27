# Elm Labs landing page

The elmlabs.ai site. One Astro page: `src/pages/index.astro`, with the animated contour map in `src/components/Contours.astro`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in ./dist
```

Pushing to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`).
