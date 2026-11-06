# Lai Hong Wah — Portfolio

Personal portfolio site, plus a concept website built as a project.

- **Portfolio:** https://hongwah.github.io/
- **Slow Ember (concept site):** https://hongwah.github.io/coffee/
- **Resume (PDF):** https://hongwah.github.io/Resume-LaiHongWah.pdf

## What's here

### Portfolio

A one-page site with my experience, project, skills, education and contact details, and a link to download my resume.

### Slow Ember

A Chinese-language website for a fictional coffee brand. The brand, products and copy are invented for this project.

- Filter the coffee range by roast level
- Brew calculator that works out coffee and water amounts by method and number of servings
- Reusable SVG component that draws every coffee bag in its own colours
- Responsive layout for desktop and mobile
- All site text kept in one content file, separate from the components

Built with AI assistance.

## Tech stack

- React 19
- Vite 8 (two pages built from one project)
- Plain CSS
- GitHub Actions and GitHub Pages for deployment

## Project structure

```
index.html              Portfolio page entry
coffee/index.html       Slow Ember page entry
src/portfolio/          Portfolio components, content and styles
src/components/         Slow Ember components (Bag, BrewGuide, Coffees, ...)
src/content.js          Slow Ember text and data
src/styles.css          Slow Ember styles
public/                 Resume PDF, favicons, redirects from the old URL
.github/workflows/      Build and deploy workflow
```

## Run locally

Requires Node.js 20.19 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:5173/ for the portfolio and http://localhost:5173/coffee/ for Slow Ember.

To check the production build:

```bash
npm run build
npm run preview
```

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages.
