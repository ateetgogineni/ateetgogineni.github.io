# Venkata Ateet Gogineni · Portfolio

Personal portfolio: **https://ateetgogineni.github.io**

Black and gold, set in Cinzel and Montserrat, with scroll-driven animation: the hero phones fan out as you scroll, the statement lights up word by word, a sticky phone switches between the shipped games, and screenshot rows drift across the gallery.

## Stack

- Plain HTML, CSS and JavaScript. No build step.
- [GSAP 3 + ScrollTrigger](https://gsap.com/) (cdnjs) for the scroll-scrubbed scenes.
- Reveal-on-scroll uses `IntersectionObserver` and CSS, so the page still works if GSAP fails to load.
- Respects `prefers-reduced-motion`: all content shows without animation.

## Structure

```
index.html            all content (edit text here)
css/style.css         theme tokens at the top (:root)
js/main.js            nav, reveals, games showcase, GSAP scenes
assets/img/games/     store screenshots (WebP, 420px wide)
assets/img/icons/     app icons
assets/img/projects/  project screenshots
assets/og-image.jpg   link-preview image (1200x630)
```

## Updating

- **Add a shipped game:** copy an `<article class="game">` block in `index.html`, add its four screenshots to the `#stageScreen` list with the next `data-g` number, and change the `04` counter.
- **Screenshots:** convert to WebP at 420px wide, e.g. `cwebp -q 76 -resize 420 0 in.png -o out.webp`.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

GitHub Pages serves the `develop` branch.
