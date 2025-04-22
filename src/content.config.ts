import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./contents/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    slug: z.string(),
    tags: z.array(z.string()),
    images: z.array(z.any()),
    videos: z.array(z.any()).optional(),
  }),
});

export const collections = { projects };
