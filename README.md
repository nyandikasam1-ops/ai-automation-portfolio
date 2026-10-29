# Samson Nyandika Orina — Portfolio

A responsive, static portfolio for AI quality assurance, data verification and workflow operations.

## Design and structure

- `index.html` remains the page entry point and preserves the existing section content, IDs, direct email actions and responsive menu.
- `public/portfolio.css` contains the editorial design tokens, color and type system, component treatments, focus styles and tablet/mobile layout adjustments.
- The existing portrait and favicon remain in `public/`; source CVs and original attachments stay private.
- Tailwind's existing CDN utility layer and the GitHub Pages Actions publishing workflow are retained; no build system or new package dependency was introduced.
- The Tailwind CDN requires network access and emits its documented production-use console warning. Moving to a locally compiled stylesheet would require a separate build decision; the existing static publishing flow is intentionally unchanged here.

## Run locally

Open `index.html` in a browser. The page has no local package manager, JavaScript framework or build step. Tailwind utility styles load through the Tailwind CDN; an internet connection is needed for those styles. The portrait and favicon are local files in `public/`.

## Publish

GitHub Actions publishes the root `index.html` and the contents of `public/` to GitHub Pages on each push to `main`. The workflow copies those static files to the Pages artifact; it does not install dependencies or compile a bundle.

Live site: https://nyandikasam1-ops.github.io/ai-automation-portfolio/

## Content integrity

- The portrait in `public/samson-profile.jpg` is an upright, optimized copy of the user-supplied `attachments/1000233639.jpg`. The supplied source attachment remains private and ignored by Git.
- The requested activity, tool-call, time-saved and QA-accuracy numbers are displayed as **owner-reported estimates**, not independently audited measurements. Public evidence, definitions and calculation methods were not supplied.
- Career entries and education are worded conservatively from the supplied CVs. Degree completion and IELTS score are omitted because source versions conflict.
- Python is listed in the supplied material; Python 3.13 specifically is not verified. No production n8n/Make deployment or double-blind Airtable implementation is claimed.
- Workflow case studies are explicitly reference designs, not client deployments or measured outcomes.
- The GitHub profile link is included. No LinkedIn profile URL was provided, so the site does not guess one.
- There is no public résumé download in the existing site or tracked assets, so no download link was added.
- Original attachments and source documents are not published.
