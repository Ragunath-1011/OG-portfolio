# Ragunath D. — Developer Portfolio

A single-page portfolio for **Ragunath D.**, an Artificial Intelligence & Data Science graduate from Chennai, India. The site is built around full-stack development, AI/ML and data analytics work, with an emphasis on clear project status labels rather than inflated claims.

## Stack

- React 19 + Vite 8
- JavaScript (JSX), plain CSS with shared variables
- Lucide React icons
- Self-hosted fonts via Fontsource: Instrument Sans, Instrument Serif, JetBrains Mono
- IntersectionObserver-based reveals, custom hooks, and CSS animations
- No UI framework, router, chart library or animation dependency

## Run locally

```bash
npm install
npm run dev
```

Vite serves the site at the URL printed in the terminal, normally `http://localhost:5173`.

### Other scripts

```bash
npm run lint     # ESLint
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Project structure

```text
public/
  images/              Project screenshots and training artifacts
  resume.pdf           Downloadable résumé (single source of truth)
  favicon.svg          SVG favicon
  icon-192.png         PWA icon
  icon-512.png         PWA icon
  apple-touch-icon.png iOS home-screen icon
  og-image.png         Open Graph / social preview image
src/
  components/          Navbar, footer, project UI, theme toggle, icons, etc.
  data/                All editable profile, skills, project and credential data
    profile.js
    projects.js
    skills.js
    experience.js
  hooks/               Theme, scroll, active-section and body-lock hooks
  sections/            Hero, About, Skills, Projects, Experience, Contact
  styles/
    variables.css      Design tokens for both themes
    base.css           Reset, typography, shared primitives
    components.css     Navbar, cards, modal, footer, etc.
    sections.css       Section-specific layouts and responsive rules
  App.jsx
  main.jsx
```

## Editing content

All copy that is likely to change lives in `src/data/`:

| File | Contents |
| --- | --- |
| `profile.js` | Name, availability, email, GitHub, LinkedIn, résumé path, hero copy, education summary |
| `projects.js` | Project list, categories, stack, screenshots, status notes and case-study copy |
| `skills.js` | Skill groups, labels and tags |
| `experience.js` | Internship, education, certifications and "currently learning" items |

### Refresh the résumé

Replace `public/resume.pdf` with the latest PDF. Every résumé button already points at that file, so no component changes are needed. The file currently in place is a real AI/ML-focused résumé; switch it for the Data Analyst / Full Stack version if that is the better fit for the role you are applying to.

### Project images

- `aquavision-training.webp` and `aquavision-labels.webp` are real artifacts from the YOLOv8 training run.
- `ecommerce-analytics.webp` is a capture of the local dashboard with demo data.
- `horror-hub.webp` is a capture of the local Horror Hub page.
- MoneyMind, Time Is Precious, House Price Prediction and Laptop Price Comparison use clearly labelled, code-drawn case-study covers. Replace a cover with a real screenshot by adding an image to `public/images/` and setting a `visual` object on that project in `src/data/projects.js`. The original PNG/JPG captures are retained beside the optimized WebP files.

Never add a screenshot, repository link or deployment URL that does not exist.

### Contact form

The form is intentionally a **mailto form**. Validation happens in the browser, then the visitor's own email client opens with the message prefilled. Nothing is sent to or stored on a server, and no API keys are needed.

If a real backend is added later, update `src/sections/Contact.jsx` to post to it, keep a mailto fallback, and add server-side spam protection. Do not put email-service secrets in the frontend.

## Design and accessibility notes

- Dark-first editorial theme with an accessible light theme; the choice is stored in `localStorage` under `portfolio-theme`.
- Responsive at 320, 375, 768, 1024 and 1440 px with no horizontal overflow.
- Reduced-motion support via `prefers-reduced-motion`.
- Keyboard-accessible navigation, focus trapping in the mobile menu, focus restoration, skip link, native modal dialog, visible focus styles and labelled form controls.
- Project cards and category filters expose their state to assistive technology.
- Stable section IDs and `scroll-margin-top` keep headings clear of the fixed navbar.

## Deployment

The project is a static site. Run `npm run build` and deploy the contents of `dist/` to Vercel, Netlify, Cloudflare Pages or any static host.

If deploying to a GitHub Pages subpath, set the Vite `base` option in `vite.config.js` first. No deployment URL, custom domain or analytics service is configured here.

## Assets and links still to supply

The site deliberately avoids fabricated links and metrics. When these are available, add them to `src/data/projects.js`:

- Verified GitHub repositories and live demo URLs for individual projects.
- Real screenshots for the four projects that currently use labelled design covers.
- Certificate images or public credential URLs, if those should replace the plain credential entries.

The visible contact details are the verified email address, GitHub profile and LinkedIn profile.
