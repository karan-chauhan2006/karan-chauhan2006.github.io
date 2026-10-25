# Karan Chauhan — Editorial Website

A working Astro starter with a photographic homepage and independent editorial layouts for Mathematics, Finance, Philosophy, Projects, Digressions, and Writing.

## Run on Windows

1. Extract the zip into a NEW folder (do not overwrite the first starter).
2. Open the folder in VS Code.
3. Open Terminal → New Terminal.
4. Run `npm install` followed by `npm run dev`.
5. Open the URL printed by Astro (usually http://localhost:4321/).

## Customization
- `src/pages/index.astro`: homepage text and rotating image URLs.
- `src/pages/mathematics/index.astro`: mathematical homepage.
- `src/pages/mathematics/algebraic-picture/index.astro`: manuscript sample.
- `src/pages/finance/index.astro`: finance newspaper.
- `src/pages/philosophy/index.astro`: book-cover library.
- `src/pages/projects/index.astro`: filterable project cards.
- `src/pages/digressions/index.astro`: tactile newspaper scraps.
- `src/pages/writing/index.astro`: author page and Substack placeholder.
- `src/styles/site.css`: all styling.
- `src/layouts/BaseLayout.astro`: universal header/navigation/footer.

Sample article titles and some categories are placeholders, not published links. Remote Unsplash photos require an internet connection; replace them with your own licensed images in `public/images/` when ready. The newspaper mastheads are stylistic placeholders, not actual reproduced newspapers. The cover designs take broad inspiration from paperback publishing and do not replicate Penguin trade dress.


## Philosophy library (new)

The Philosophy section now has four selectable cover families. All other sections are unchanged.

1. Open `src/content/philosophy/` and edit any `.md` file.
2. Change `title:` to the title you want. Your author name is automatically **Karan Chauhan**.
3. Set `coverStyle:` to one of `triband`, `modern-type`, `modern-image`, `classics-image`.
4. For `modern-type`, optionally choose `typeVariant: mint` or `typeVariant: grey`.
5. For image styles, set `image:` to an image URL or to a local `/images/...` path. Put local files in `public/images/`.
6. Write your essay under the second `---` line. The article page is created automatically at `/philosophy/<filename-without-md>/`.
7. To add an essay, copy an existing `.md` file and rename the copy using a unique URL-friendly filename.

Sample essays contain placeholder text; **do not publish without replacing it**. The cover design is original and Penguin-inspired, not an official Penguin product.
