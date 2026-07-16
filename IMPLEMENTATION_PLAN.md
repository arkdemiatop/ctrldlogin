# ctrldlogin Public Repository — Implementation Plan

## Purpose

This public repo serves as the **releases + documentation hub** for the ctrldlogin desktop application. Source code, CI workflows, and internal development live in a private repo. The private repo's workflow automatically pushes release binaries here.

## Goal

Transform this repo into a polished product landing page with:
- **README** — badges, description, download links, screenshots
- **CHANGELOG** — version history
- **Vitepress docs site** — static HTML, great SEO, search, dark/light theme
- **Release binaries** — uploaded automatically from the private repo

---

## Structure

```
ctrldlogin/
├── README.md                 Landing page (badges, screenshots, download links)
├── CHANGELOG.md              Version history
├── LICENSE                   MIT
├── IMPLEMENTATION_PLAN.md    This file
├── docs/                     Vitepress site
│   ├── .vitepress/
│   │   └── config.ts         Vitepress configuration
│   ├── public/
│   │   └── logo.svg          Site logo
│   ├── index.md              Site home page
│   ├── getting-started.md    Download, install, first run
│   ├── features.md           Feature overview
│   ├── api-guide.md          REST API reference
│   └── changelog.md          Symlink or copy of CHANGELOG.md
├── assets/
│   ├── screenshot.png        App screenshot for README
│   └── logo-dark.svg         Logo for dark mode
│   └── logo-light.svg        Logo for light mode
└── package.json              Vitepress dependency + scripts
```

---

## Vitepress Over docsify

| Factor | Vitepress | docsify |
|--------|-----------|---------|
| Output | Static HTML | Client-side rendered |
| SEO | Perfect (pre-rendered) | Poor (JS-dependent) |
| Without JS | Works fully | Blank page |
| Search | Built-in (mini-search) | Plugin required |
| Dark mode | Built-in | Plugin required |
| CDN dependency | None (local files) | Required (docsify.js) |
| Build step | `vitepress build` | None |
| Framework | Vue 3 (matches app) | Vanilla JS |

---

## Content Plan

### Landing pages

- **README.md** — product overview, badges, download table, screenshot, quick start
- **docs/index.md** — Vitepress home, same tone but focused on docs navigation

### User-facing docs

- **getting-started.md** — system requirements, download links per OS, installation steps, first profile walkthrough
- **features.md** — detailed feature descriptions (profile management, fingerprinting, proxies, extensions)
- **api-guide.md** — REST API reference for local HTTP control

### No build guides

This repo distributes binaries, not source. Build guides mislead visitors and are removed entirely.

---

## GitHub Pages Setup

1. Push `docs/` with Vitepress output to `gh-pages` branch, or
2. Use GitHub Actions to build on push and deploy to GitHub Pages (branch: `gh-pages`, source: `/`)

### GitHub Actions workflow (recommended)

```yaml
name: Deploy docs
on:
  push:
    branches: [main]
    paths: ['docs/**', 'package.json']
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run docs:build
      - uses: actions/upload-pages-artifact@v3
        with: { path: docs/.vitepress/dist }
      - uses: actions/deploy-pages@v4
```

---

## What Stays Private

Source code (`backend/`, `src-tauri/`, `frontend/`), build scripts, CI workflows, design docs, internal configuration, worker code, archived docs, and any third-party integration code.

---

## Execution Steps

- [x] Create `package.json` with `vitepress` dependency and `docs:dev` / `docs:build` scripts
- [x] Create `docs/.vitepress/config.ts` with site metadata, theme, sidebar, search config
- [x] Create `docs/public/logo.svg`
- [x] Write `docs/index.md` — site home
- [x] Write `docs/getting-started.md` — install guide
- [x] Write `docs/features.md` — sanitized feature overview (from private repo)
- [x] Write `docs/api-guide.md` — REST API reference (public endpoints only; no License/Worker)
- [x] Write `docs/changelog.md` — sanitized changelog
- [x] Update `README.md` — polished landing page with screenshots
- [x] Add `assets/icon.png` and `assets/icon.ico` (from private repo icons)
- [x] Add `LICENSE` (MIT)
- [ ] **User action:** Enable GitHub Pages in repo settings → branch `main`, folder `/docs`
- [ ] **User action:** Verify site at `https://arkdemiatop.github.io/ctrldlogin/`

## Sanitization Applied

When extracting content from the private repo (`cloakmanager-app`), the following was removed or altered:

- **Name:** "CloakManager" → "ctrldlogin"
- **Engine:** "CloakBrowser" → "browser engine" (genericized)
- **Build guides:** Removed entirely (BUILD.md, LINUX_BUILD.md, WINDOWS_BUILD.md)
- **Internal file paths:** Removed (e.g., `backend/core/config.py`, commit refs)
- **License/Worker endpoints:** Excluded from API reference (reveals business infra)
- **Feature gating:** Removed (license tiers, HWID, grace periods)
- **Architecture docs:** Kept private (ARCHITECTURE.md, APP_STRUCTURE.md)
- **Cloud infrastructure:** Removed (worker docs, deployment guides)
- **Design docs:** Kept private (design/, sections/, archive/)
