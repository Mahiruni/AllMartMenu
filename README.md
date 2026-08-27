# ALL MART Restaurant Menu

A production-ready, mobile-first digital restaurant menu for **ALL MART**, built from the supplied printed menu and brand artwork.

## What is included

- Premium responsive layout for mobile, tablet and desktop
- Recreated ALL MART triangular logo as scalable SVG
- Brand palette: orange `#F5A623`, gray `#6B6B6B`, gold `#C9A86C`, off-white `#FFFEF9`, charcoal `#1C1C1C`
- Gold corner ornament inspired by the original printed menu
- Full menu transcription with prices from the supplied 10-page menu
- Search by dish or ingredient
- Category filters and sticky menu navigation
- Featured/popular menu cards
- Mobile bottom navigation and slide-out menu
- Reduced-motion support and keyboard focus states
- WCAG-conscious contrast and semantic markup
- Print-friendly A4 stylesheet
- Restaurant structured data (`schema.org/Restaurant`)
- No framework or runtime dependency — deploy as a static site anywhere

## Run locally

Use any static server. For example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

The project is zero-build and works directly on GitHub Pages, Vercel, Netlify, Cloudflare Pages or any ordinary web server. The publish directory is the repository root.

## Update menu content

All menu content lives in **`menu-data.js`**.

Each menu section has this structure:

```js
{
  id: "breakfast",
  label: "Breakfast",
  group: "breakfast",
  items: [
    {
      name: "Classic Omelet",
      price: 385,
      description: "Tomato, avocado, lettuce, onion and cheese.",
      popular: true,
      tags: ["Breakfast"]
    }
  ]
}
```

For pizza or any item with multiple sizes, use:

```js
prices: { Large: 1040, Small: 660 }
```

No HTML changes are needed when adding or removing dishes.

## Replace photography

Featured photography URLs are in `menu-data.js` under `ALL_MART_FEATURED`. The hero and story photographs are in `index.html`.

For production-owned assets, replace the remote image URL with a local file such as:

```html
<img src="assets/food/special-pizza.webp" alt="ALL MART special pizza">
```

Recommended image spec: WebP or AVIF, 1400–1800px wide, under ~250KB when practical, warm natural light, clean plate styling.

## Brand / design rationale

The interface deliberately gives the bright ALL MART orange a focused role: primary CTA, logo, status dots and small interaction cues. This keeps the identity unmistakable without turning the entire interface orange. The original menu's warm gold becomes the elegant connective tissue — ornaments, fine rules, category metadata and subtle borders — while the charcoal typography creates the high contrast needed for fast scanning.

Large editorial serif headlines add hospitality and personality; compact sans-serif body copy keeps prices, descriptions and controls functional. The off-white background echoes the physical menu and softens contrast compared with pure white. Photography is large, warm and editorial rather than used as repetitive card decoration, keeping the menu itself clean and fast.

## Content note

Dish names, ingredients and prices were transcribed from the supplied ALL MART menu images. Obvious spelling inconsistencies were lightly normalized for web readability (for example, “cheese”, “chicken”, “croissant” and “Bolognese”) without changing the listed prices.
