import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    metaTitle: z.string().max(60),
    metaDescription: z.string().max(155),
    icon: z.string(),
    order: z.number(),
    heroSubtitle: z.string().optional(),
    keywords: z.array(z.string()),
    relatedServices: z.array(z.string()).optional(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    photo: z.string().optional(),
    order: z.number(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string(),
    bio: z.string(),
    order: z.number(),
    linkedin: z.string().optional(),
    substack: z.string().optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    visual: z.string(),
    order: z.number(),
    published: z.boolean().default(true),
    category: z.enum(['Technology', 'Hosting', 'Content', 'Design', 'Legal', 'Search']),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    order: z.number(),
    category: z.enum(['team', 'process', 'technical']).optional(),
  }),
});

export const collections = { services, testimonials, team, faq, guides };
