The Algebraic Picture — typesetting patch

This patch contains only the relevant changed website files. It leaves your
Markdown chapters and the rest of the site untouched.

HOW TO APPLY (Windows):
1. Make a backup or commit your website changes.
2. Extract this ZIP into the project root (the folder containing package.json),
   preserving folders and replacing existing files when prompted.
3. Restart the Astro dev server: npm run dev
4. Open your Sets chapter and inspect the new diagrams and inline math.

WHAT CHANGED:
- src/styles/site.css: book-only math typography, diagram centering/sizing.
- src/layouts/BaseLayout.astro: loads STIX Two Text via the existing Google Fonts URL.
- public/The_Algebraic_Picture_assets/diagram_1.svg and diagram_2.svg:
  freshly compiled, cleaner vector diagrams.
- Matched diagram_1.tex and diagram_2.tex sources.

NOT CHANGED:
- Markdown content and notation.
- Astro renderer setup: it already uses rehype-mathjax/svg.
- Other parts of the website.

NOTE: Generated SVGs and the CSS were checked programmatically, but
we cannot run an Astro build here because npm network access is unavailable.
