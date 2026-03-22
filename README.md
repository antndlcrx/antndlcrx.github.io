# Oxford LLMs Website

The website for [Oxford LLMs](https://llmsforsocialscience.net/) — research, teaching, and community for social scientists working with language models.

Built with [Astro](https://astro.build/). Hosted on GitHub Pages.

## Quick Start

### Prerequisites

You need **Node.js 18+** installed. Check with:

```bash
node --version    # should show v18.x or higher
npm --version     # should show 9.x or higher
```

If you don't have Node.js, install it:

- **macOS:** `brew install node`
- **Or download from:** https://nodejs.org/ (pick the LTS version)

### Setup (one time)

```bash
# Clone the repo (replace with your fork URL if different)
git clone https://github.com/antndlcrx/antndlcrx.github.io.git
cd antndlcrx.github.io

# Install dependencies
npm install
```

### Development (daily use)

```bash
# Start the dev server (like `bundle exec jekyll serve`)
npm run dev

# Site is now live at http://localhost:4321
# It auto-refreshes when you save a file — no restart needed
```

### Build & Preview

```bash
# Build the production site (outputs to dist/)
npm run build

# Preview the built site locally
npm run preview
```

### Deploy

Deployment is automatic via GitHub Actions. Just push to `main`:

```bash
git add .
git commit -m "your changes"
git push
```

The site will be live in ~2 minutes. The workflow is in `.github/workflows/pages-deploy.yml`.

**First-time GitHub Pages setup:** In your repo settings → Pages → Source, select "GitHub Actions" (not "Deploy from a branch").

---

## Project Structure

```
.
├── public/              ← Static files (images, fonts). Copied as-is.
│   └── img/
│       └── logo/        ← Put logo files here
├── src/
│   ├── components/      ← Reusable pieces (nav, footer, etc.)
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   └── Partners.astro
│   ├── layouts/         ← Page wrappers (like Jekyll _layouts/)
│   │   └── Base.astro
│   ├── pages/           ← Each file = a URL (like Jekyll pages)
│   │   ├── index.astro       → /
│   │   ├── about.astro       → /about/
│   │   ├── research.astro    → /research/
│   │   ├── course.astro      → /course/
│   │   ├── resources.astro   → /resources/
│   │   ├── apply.astro       → /apply/
│   │   └── summer-school/
│   │       ├── index.astro   → /summer-school/
│   │       ├── 2023.astro    → /summer-school/2023/
│   │       ├── 2024.astro    → /summer-school/2024/
│   │       └── 2025.astro    → /summer-school/2025/
│   └── styles/
│       └── global.css   ← All design tokens and styles
├── astro.config.mjs     ← Site configuration
├── package.json         ← Dependencies (like Gemfile)
└── .github/workflows/
    └── pages-deploy.yml ← Auto-deploy on push to main
```

## How to Edit Content

### Editing a page

Open any `.astro` file in `src/pages/`. The format is:

```astro
---
// This top section is like Jekyll front matter
import Base from '../layouts/Base.astro';
---

<!-- This section is HTML — same as you're used to -->
<Base title="Page Title">
  <div class="container container--content">
    <div class="prose">
      <h1>Your content here</h1>
      <p>Just write HTML. The `prose` class handles typography.</p>
    </div>
  </div>
</Base>
```

**Key classes:**
- `container` — centers content at max-width
- `container--content` — narrower width for reading
- `prose` — applies typography styles to headings, paragraphs, links, tables
- `card` — styled content box
- `grid-2`, `grid-3` — responsive grid layouts
- `tag` — small label (like "UPCOMING", "COURSE")
- `btn btn--primary` — styled button

### Adding a new page

Create a new `.astro` file in `src/pages/`. The file path = the URL:
- `src/pages/new-page.astro` → `/new-page/`
- `src/pages/summer-school/2026.astro` → `/summer-school/2026/`

### Adding images

1. Put the image in `public/img/` (any subfolder is fine)
2. Reference it as `/img/your-image.jpg` in your HTML

### Adding the logo files

Copy your logo files into `public/img/logo/`:
```
public/img/logo/
├── logo_llms_transp.png    ← used in nav, hero, footer
├── logo_llms_dark.jpg      ← used for OG image / social sharing
├── logo_llms_light.jpg     ← available for light contexts
└── logo_llms_light_cropped.jpg
```

---

## Astro vs Jekyll — Key Differences

| Concept | Jekyll | Astro |
|---------|--------|-------|
| Start dev server | `bundle exec jekyll serve` | `npm run dev` |
| Install dependencies | `bundle install` | `npm install` |
| Page files | `.md` or `.html` in root | `.astro` in `src/pages/` |
| Layouts | `_layouts/` | `src/layouts/` |
| Includes/components | `_includes/` | `src/components/` |
| Static files | root or `assets/` | `public/` |
| Config | `_config.yml` | `astro.config.mjs` |
| Template syntax | `{{ liquid }}` | `{javascript}` |
| Build output | `_site/` | `dist/` |

The biggest difference: instead of Liquid templates (`{{ page.title }}`), Astro uses JavaScript in the frontmatter section and JSX-like syntax in the HTML. But for basic pages, you mostly just write HTML inside the `<Base>` component.

---

## Phase 2 Features (post Apr 10)

These are planned but not yet implemented:
- [ ] Lecture videos (embed YouTube/Vimeo when ready ~Apr 3)
- [ ] 2025 highlights report
- [ ] Live application form
- [ ] 2026 summer school speaker names
- [ ] Interactive course content (KaTeX math, Three.js, slide decks)
- [ ] Social media integration

To add interactive React components (for the course page), install the React integration:
```bash
npx astro add react
```
Then you can create `.jsx` files in `src/components/` and use them inside `.astro` pages.
