# Publishing to Karan Chauhan's site

This update changes content storage, **not** the approved visual layouts. The original placeholder articles are carried over and explicitly labeled samples; replace or delete them before treating them as your actual writing.

## Fast workflow
1. Create/edit `.md` in `src/content/<section>/` and save.
2. Run `npm run dev` and open http://localhost:4321/.
3. Run `npm run build`.
4. Run `git add . && git commit -m "Publish new content" && git push` from PowerShell (separate commands if preferred). GitHub Pages automatically deploys.

## Add a book chapter
Create `src/content/mathematics/some-chapter.md`:

```md
---
title: "Some Chapter"
chapter: 7
section: "Algebraic structures"
description: "A summary"
---

Write text here, with inline $x^2$ and display math:

$$
\operatorname{Hom}_{\mathcal C}(Z,A\times B) \cong \operatorname{Hom}_{\mathcal C}(Z,A)\times\operatorname{Hom}_{\mathcal C}(Z,B).
$$
```

Chapter order comes from `chapter`, sidebar and previous/next links are automatic. `introduction.md` is routed at `/mathematics/algebraic-picture/`; other IDs become `/mathematics/algebraic-picture/<filename>/`.

## Add a newspaper digression
Copy one file in `src/content/digressions/` and rename it. Preserve all frontmatter fields, and change the title, category, photo URL, newspaper details, `order`, and Markdown body. The filename becomes the route `/digressions/<filename>/`. `draft: true` excludes it from the public build. Images placed inside `public/images/` are available as `/images/name.jpg`.

## Philosophy
Already Markdown powered: copy a file in `src/content/philosophy/` and preserve its supported coverStyle and other metadata. Philosphy's layout remains unchanged.

## Writing / Finance
Create `src/content/writing/my-essay.md` with this frontmatter:

```md
---
title: "My essay"
date: 2026-10-25
description: "Short summary"
---

Write here.
```

Finance uses `src/content/finance/`, with an additional optional `category: Valuation`.

## Projects
Create `src/content/projects/my-tool.md` with:

```md
---
title: "My Tool"
category: "AUTOMATION"
tags: ["Python", "CLI"]
summary: "What it does"
order: 1
---

Describe the project here.
```

The original projects cards stay as they are, and any new Markdown entries are appended. To eliminate the old sample cards, edit `src/pages/projects/index.astro` later.

## Mathematical history / research
These are still data-driven in `src/data/mathematics.mjs` to avoid inventing or silently migrating personal academic records. They can be migrated to collections in a separate focused update. Similarly, the Home page is a presentation rather than an article and should remain an Astro page.

## Notes
- `draft: true` on mathematics, digressions, writing, finance and projects suppresses an entry from the public site. Philosophy does not currently have draft filtering.
- Normal Markdown math is rendered by `remark-math` + `rehype-katex`; TikZ is **not** supported by KaTeX.
- Commit `package-lock.json`, but never commit `node_modules`, `dist`, or `.astro`.
