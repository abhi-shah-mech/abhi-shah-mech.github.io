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
    order: z.number(),
    tags: z.array(z.string()),
    images: z.array(z.any()).optional(),
    videos: z.array(z.any()).optional(),
    process_images: z
      .array(
        z.object({
          description: z.string(),
          src: z.string(),
          // presence of `thumbnail` marks this step as a video instead of an image
          thumbnail: z.string().optional(),
        })
      )
      .optional(),
  }),
});

export const collections = { projects };
