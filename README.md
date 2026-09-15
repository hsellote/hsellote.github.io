# Hazel Sellote — Portfolio

Static site. No build step: open `index.html` in a browser or drop the folder on Netlify / Vercel / GitHub Pages.

```
index.html    markup + all copy
style.css     tokens (:root) and all styling
script.js     rotating word, scroll reveal, matcha cursor
assets/       images (see below)
```

## Images to add (`assets/`)

Hero collage — square, ~500×500:
`tile-1.jpg` … `tile-6.jpg`

Case studies:
`work-n-compass.jpg` (4:3), `work-handvaerker.jpg` (16:11), `work-teravault.jpg` (16:11)

Resume: `hazel-sellote-resume.pdf`

Filenames are referenced in `index.html` — rename there if you prefer different ones.

## Editing

Colors, fonts and spacing live in the `:root` block at the top of `style.css`.
The accent (`--accent: #84B067`) also drives the matcha cursor — `script.js` reads it from CSS.

Headline words rotate from `data-words` on `<span class="rotator">` in `index.html`.

The cursor is disabled automatically on touch devices and for visitors with reduced-motion enabled.

## To do before launch

- Swap the LinkedIn `href` in the footer for the real profile URL.
- Add real project links (each `<article>` in `#work` can wrap in an `<a>`).
