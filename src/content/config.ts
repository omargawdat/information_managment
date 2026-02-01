import { defineCollection, z } from 'astro:content';

const chaptersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    chapter: z.number(),
    order: z.number(),
    description: z.string().optional(),
  }),
});

export const collections = {
  chapters: chaptersCollection,
};
