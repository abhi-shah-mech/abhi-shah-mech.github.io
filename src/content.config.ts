import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

export const CATEGORIES = [
  "Robotics and Automation",
  "Consumer Electronics",
  "Software Automation Tools",
  "Hardware Automation Tools",
  "Medical",
] as const;

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
    category: z.enum(CATEGORIES),
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
          // when true, no arrow renders between this column and the one
          // before it (the two still render as separate columns)
          no_arrow: z.boolean().optional(),
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
