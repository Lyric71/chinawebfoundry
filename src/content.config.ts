import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    metaTitle: z.string().max(80),
    metaDescription: z.string().max(220),
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
    author: z.string().default('cyril-drouin'),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
});

const casestudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casestudies' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    visual: z.string(),
    visuals: z.array(z.string()).optional(),
    color: z.string(),
    order: z.number(),
    published: z.boolean().default(true),
    services: z.array(z.string()).optional(),
  }),
});

// French collections (same schemas, different source directories)
const servicesFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services-fr' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    icon: z.string(),
    order: z.number(),
    heroSubtitle: z.string().optional(),
    keywords: z.array(z.string()),
    relatedServices: z.array(z.string()).optional(),
  }),
});

const testimonialsFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials-fr' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    photo: z.string().optional(),
    order: z.number(),
  }),
});

const teamFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team-fr' }),
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

const guidesFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides-fr' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    visual: z.string(),
    order: z.number(),
    published: z.boolean().default(true),
    category: z.enum(['Technology', 'Hosting', 'Content', 'Design', 'Legal', 'Search']),
    author: z.string().default('cyril-drouin'),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
});

const casestudiesFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casestudies-fr' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    visual: z.string(),
    visuals: z.array(z.string()).optional(),
    color: z.string(),
    order: z.number(),
    published: z.boolean().default(true),
    services: z.array(z.string()).optional(),
  }),
});

const faqFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq-fr' }),
  schema: z.object({
    question: z.string(),
    order: z.number(),
    category: z.enum(['team', 'process', 'technical']).optional(),
  }),
});

// Spanish collections (same schemas, different source directories)
const servicesEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services-es' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    icon: z.string(),
    order: z.number(),
    heroSubtitle: z.string().optional(),
    keywords: z.array(z.string()),
    relatedServices: z.array(z.string()).optional(),
  }),
});

const testimonialsEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials-es' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    photo: z.string().optional(),
    order: z.number(),
  }),
});

const teamEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team-es' }),
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

const guidesEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides-es' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    visual: z.string(),
    order: z.number(),
    published: z.boolean().default(true),
    category: z.enum(['Technology', 'Hosting', 'Content', 'Design', 'Legal', 'Search']),
    author: z.string().default('cyril-drouin'),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
});

const casestudiesEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casestudies-es' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    visual: z.string(),
    visuals: z.array(z.string()).optional(),
    color: z.string(),
    order: z.number(),
    published: z.boolean().default(true),
    services: z.array(z.string()).optional(),
  }),
});

export const collections = {
  services, testimonials, team, guides, casestudies,
  'services-fr': servicesFr,
  'testimonials-fr': testimonialsFr,
  'team-fr': teamFr,
  'faq-fr': faqFr,
  'guides-fr': guidesFr,
  'casestudies-fr': casestudiesFr,
  'services-es': servicesEs,
  'testimonials-es': testimonialsEs,
  'team-es': teamEs,
  'guides-es': guidesEs,
  'casestudies-es': casestudiesEs,
};
