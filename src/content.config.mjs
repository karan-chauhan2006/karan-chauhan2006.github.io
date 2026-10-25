import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const philosophy = defineCollection({
  loader: glob({pattern:'**/*.md',base:'./src/content/philosophy'}),
  schema: z.object({
    title:z.string(),
    coverStyle:z.enum(['triband','modern-type','modern-image','classics-image']),
    typeVariant:z.enum(['mint','grey']).optional(),
    coverColor:z.string().optional(),
    image:z.string().optional(),
    category:z.string().default('Essay'),
    excerpt:z.string().optional(),
    order:z.number().default(99),
  }),
});
export const collections = { philosophy, mathematics };
const mathematics = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/mathematics',
  }),
  schema: z.object({
    title: z.string(),
    chapter: z.number(),
    section: z.string(),
    description: z.string().optional(),
  }),
});
