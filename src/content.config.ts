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
          // consecutive entries sharing the same `group` number are stacked
          // together in one column instead of each getting their own
          group: z.number().optional(),
        })
      )
      .optional(),
    // when set, process_images renders as a plain N-column grid with no
    // arrows, instead of the default arrow-connected flow
    process_columns: z.number().optional(),
    // "split" gives the default (non-process) layout a 2/3 text, 1/3
    // vertically-stacked-images column split instead of the usual 50/50
    layout: z.enum(["default", "split"]).optional(),
  }),
});

export const collections = { projects };
