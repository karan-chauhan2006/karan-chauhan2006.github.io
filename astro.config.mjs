import { defineConfig } from 'astro/config';

import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://karan-chauhan2006.github.io',

  markdown: {
    processor: unified(),
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});