# Dijitrove — Morocco promo

A 30-second, vertical 9:16 Remotion video concept celebrating Morocco. It uses original SVG/CSS artwork, animated transitions, Moroccan Arabic (Darija) headlines, and English transliteration—no downloaded images or assets required.

## Requirements

- Node.js 18 or newer
- npm

## Preview and render

```bash
npm install
npm run dev
```

Open the `MoroccoPromo` composition in Remotion Studio. To render the MP4:

```bash
npm run build
```

The output is `out/morocco-promo.mp4` (1080 × 1920, 30 fps, 30 seconds). Remotion may prompt you to install its browser dependencies the first time you render.

## Customize

Edit the five scene entries in `src/VideoRoot.jsx` to change the Darija copy, Latin transliteration, colors, and location captions. The current concept is a general Morocco travel promo; it does not claim to represent a specific travel service. Add licensed narration/music during your final edit if desired.
