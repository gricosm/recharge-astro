import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    reference: z.string(),
    language: z.enum(["en", "es", "eu"]),
    pubDate: z.date(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    canonicalURL: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
