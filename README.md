# Hazel Sellote — Portfolio

Static portfolio site, built on the Haze Design System.

**Live:** https://hsellote.github.io

## Layout

```
index.html        page shell and section containers
script.js         all content (see below) + interactions
style.css         hand-authored styling, tokens in :root
haze/             Haze Design System source (Tailwind v4)
  input.css       entry point — imports tailwindcss + generated tokens
  *.generated.css colour tokens and @theme mapping, synced from HazeDesignSystem
dist/haze.css     build output — committed, see "Build" below
tools/            build-css.mjs
assets/           images, favicon, resume PDF
```

## Content lives in `script.js`

The page ships mostly empty containers; `script.js` renders into them from
data arrays at the top of the file:

| Array      | Renders into | What it is                          |
| ---------- | ------------ | ----------------------------------- |
| `PROJECTS` | `#work`      | Case studies — each has a live `url` |
| `PERSONAL` | `#personal`  | Personal work, mostly Behance links  |
| `TALKS`    | `#talks`     | UX design events and talks           |
| `NAV`      | `#nav`       | Sidebar rail                         |
| `FILTERS`  | `#filters`   | Work-section filter chips            |
| `WORDS`    | `#rotator`   | Rotating headline words              |

To add or edit a project, edit the `PROJECTS` array — not the HTML.

## Build

There *is* a build step: `dist/haze.css` is compiled from `haze/input.css`
through Tailwind v4's PostCSS plugin.

```bash
npm install
npm run build      # build dist/haze.css once
npm run dev        # rebuild on change
npm run serve      # http://localhost:8777
```

`dist/haze.css` is committed on purpose. GitHub Pages serves this repo from
`main` at the root with no build step, so the compiled CSS has to be in the
repo. **Re-run `npm run build` and commit the result whenever you change
anything under `haze/`** — otherwise the live site keeps serving the old CSS.

`style.css` is hand-authored and needs no build.

## Design tokens

Colour tokens are generated in the sibling
[HazeDesignSystem](https://github.com/hsellote/HazeDesignSystem) repo. Pull the
latest in with:

```bash
npm run sync:tokens
```

This expects `../HazeDesignSystem` to exist next to this folder. Run
`npm run build` afterwards.

Site-level values — colours, fonts, spacing — live in the `:root` block at the
top of `style.css`. The accent (`--accent: #84B067`) also drives the matcha
cursor, which `script.js` reads from CSS. The cursor is disabled automatically
on touch devices and for visitors who prefer reduced motion.

## Deploying

Pushing to `main` publishes. GitHub Pages is configured to serve the repository
root of `main`; a push triggers a rebuild automatically.

Because this repo is named `hsellote.github.io`, it is the account's user site
and is served at the domain root rather than under a project path.
