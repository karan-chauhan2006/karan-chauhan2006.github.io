Math font pairing experiment for The Algebraic Picture.

This replaces ONLY src/styles/site.css from the previous typesetting patch.
It does not modify your mathematics, Quiver diagrams, or Astro configuration.

Why: the previous patch paired STIX Two Text prose with MathJax v3 SVG's
TeX-style math fonts and enlarged math glyphs by 4%. This version uses
KaTeX_Main as a TeX-like text font, which your BaseLayout already loads,
and removes that extra 4%.

Apply: extract to website project root, overwrite src/styles/site.css,
then refresh the page (hard refresh if necessary).

This is a typography alternative, not a guaranteed match for a compiled
LaTeX PDF. Retain a backup of the previous stylesheet.
