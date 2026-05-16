# salmanmkc.github.io

Personal portfolio site built with [Astro](https://astro.build), deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Add a project

Edit `src/data/projects.ts` and drop the GIF into `public/gifs/`.

## Deploy

Push to `main`. The `.github/workflows/deploy.yml` workflow builds and deploys to GitHub Pages.

**One-time setup on GitHub:**
1. Create a repo named `salmanmkc.github.io` and push this code.
2. In the repo settings → **Pages** → set **Source** to **GitHub Actions**.
3. The workflow will deploy on the next push to `main`.
