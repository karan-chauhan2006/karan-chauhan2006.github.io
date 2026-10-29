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
const mathematics = defineCollection({
  loader: glob({pattern:'**/*.md',base:'./src/content/mathematics'}),
  schema: z.object({title:z.string(), chapter:z.number(), section:z.string(), description:z.string().optional(),draft:z.boolean().default(false)}),
});
const digressions = defineCollection({
  loader: glob({pattern:'**/*.md',base:'./src/content/digressions'}),
  schema: z.object({
    title:z.string(),paper:z.string(),category:z.string(),issue:z.string(),date:z.string(),
    photo:z.string(),headline:z.string(),dek:z.string(),
    layout:z.enum(['feature','sidebar','wide']),rotation:z.string(),inkRotation:z.string(),
    order:z.number(),draft:z.boolean().default(false),
  }),
});
const writing = defineCollection({
  loader: glob({pattern:'**/*.md',base:'./src/content/writing'}),
  schema:z.object({title:z.string(),date:z.coerce.date(),description:z.string().optional(),draft:z.boolean().default(false)}),
});
const finance = defineCollection({
  loader: glob({pattern:'**/*.md',base:'./src/content/finance'}),
  schema:z.object({title:z.string(),date:z.coerce.date(),category:z.string().default('Analysis'),description:z.string().optional(),draft:z.boolean().default(false),image:z.string().optional(),keywords:z.array(z.string()).default([]),relatedBrief:z.string().optional(),relatedReport:z.string().optional(),instrument:z.string().optional(),modelDate:z.coerce.date().optional(),modelValue:z.number().optional(),draftNote:z.string().optional()}),
});
const projects = defineCollection({
  loader: glob({pattern:'**/*.md',base:'./src/content/projects'}),
  schema:z.object({title:z.string(),category:z.string().default('EXPERIMENTS'),tags:z.array(z.string()).default([]),image:z.string().optional(),summary:z.string(),order:z.number().default(99),draft:z.boolean().default(false)}),
});

const mathematicalResearch = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/math-research' }),
  schema: z.object({
    title: z.string(),
    type: z.string().default('Reading notes'),
    description: z.string().default(''),
    status: z.string().default('Working notes'),
    date: z.coerce.date().optional(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});
const mathematicalHistory = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/math-history' }),
  schema: z.object({
    title: z.string(),
    period: z.string(),
    code: z.string().optional(),
    institution: z.string().default('University of Toronto'),
    instructor: z.string().optional(),
    notes: z.string().optional(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});
const mathematicalHistoryIntro = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/math-history-intro' }),
  schema: z.object({ title: z.string() }),
});

export const collections = { philosophy, mathematics, digressions, writing, finance, projects, mathematicalResearch, mathematicalHistory, mathematicalHistoryIntro };
