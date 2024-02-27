import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    reference: z.string().optional(),
    pubDate: z.date(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    canonicalURL: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
