# AI Automation Portfolio

A personal portfolio for Samson Nyandika Orina, focused on AI quality assurance, data verification and practical workflow automation. The site distinguishes professional experience from a working portfolio build and a proposed workflow concept; it does not claim that the concept is deployed.

## Features

- Responsive, single-page portfolio with working in-page navigation.
- Accessible mobile navigation, visible keyboard focus and reduced-motion support.
- Experience, skills, credentials and contact information transcribed conservatively from supplied CVs.
- Expandable project details and an explicitly labelled conceptual workflow.
- Email link that opens the visitor's email application; there is no nonfunctional contact form.
- No remote fonts, analytics, tracking scripts or backend services.
- GitHub Pages-compatible asset base path for the requested `ai-automation-portfolio` repository.

## Stack

- React 18 and TypeScript with strict compiler options.
- Vite for development and production builds.
- Small inline SVG icons to keep the runtime dependency footprint lean.
- Vitest, jsdom and Testing Library for interaction tests.

## Project structure

```text
public/                 Public favicon
src/App.tsx              Page sections and accessible navigation
src/data/portfolio.ts    Portfolio copy and content data
src/main.tsx             Application entry point
src/styles.css           Design tokens, layout and responsive styles
src/test/                Test setup and UI tests
index.html               Metadata and application shell
vite.config.ts           Vite and GitHub Pages configuration
```

Original CVs, source photographs, and the supplied `attachments/` directory are intentionally not used as public website assets.

## Requirements

- Node.js 20.19+ or 22.12+ (required by Vite 6).
- npm.

## Local development

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173/`.

## Verification

```powershell
npm run typecheck
npm test
npm run build
```

`npm run build` performs the TypeScript project build before producing static files in `dist/`.

## Configuration and contact

No environment variables, API keys, or third-party service accounts are required. The contact link opens an email addressed to the address included in the supplied CV. No message is sent or retained by this site.

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages when changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The project is then available at `https://<account>.github.io/ai-automation-portfolio/`. The Vite base path and favicon URL are configured for this project path.

## Content and limitations

- CV versions differ on some dates, job titles, language scores and study status. This site avoids disputed language scores and completion claims; the education entry is labelled as studies, and no completion date is implied.
- The AI-assisted content workflow is a proposed design, not an implemented or deployed integration.
- No source repositories or public profile URLs were supplied, so none are linked.
- The supplied photographs were not used: none was clearly a professional portrait suitable for this site's intended presentation.
- No license has been selected.
