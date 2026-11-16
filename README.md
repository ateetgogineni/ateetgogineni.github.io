# Venkata Ateet Gogineni · Portfolio

Personal portfolio: **https://ateetgogineni.github.io**

Black and gold, set in Cinzel and Montserrat, with scroll-driven animation: the hero phones (personal projects) fan out as you scroll, the statement lights up word by word, and the timeline draws itself. Shipped work games are shown with app icons and store links only, no screenshots.

## Stack

- Plain HTML, CSS and JavaScript. No build step.
- [GSAP 3 + ScrollTrigger](https://gsap.com/) (cdnjs) for the scroll-scrubbed scenes.
- Reveal-on-scroll uses `IntersectionObserver` and CSS, so the page still works if GSAP fails to load.
- Respects `prefers-reduced-motion`: all content shows without animation.

## Structure

```
index.html            all content (edit text here)
css/style.css         theme tokens at the top (:root)
js/main.js            nav, reveals, GSAP scenes
assets/img/icons/     app icons for the shipped games
assets/img/projects/  personal project screenshots (hero phones + cards)
assets/og-image.jpg   link-preview image (1200x630)
```

## Updating

- **Add a shipped game:** copy an `<article class="game">` block in `index.html` and add its icon to `assets/img/icons/`.
- **Images:** convert to WebP, e.g. `cwebp -q 76 -resize 420 0 in.png -o out.webp`.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

GitHub Pages serves the `develop` branch.
