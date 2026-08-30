# How to Update Your Website Content

This guide will help you update the content of your website, including adding or editing projects, updating images, and changing text content.

---

## 1. **Understanding the Content Folder**

All the website content is stored in the `contents` folder. Inside this folder, you will find `.yaml` files and subfolders for specific types of content:

- **`hero.yaml`**: Controls the homepage hero section (e.g., your name, title, and overview stats).
- **`about.yaml`**: Contains information about you, your skills, and contact details.
- **`approach.yaml`**: Describes your approach to work.
- **`projects.yaml`**: Contains the title for the projects section.
- **`projects/`**: A folder where individual project details are stored as `.md` files.

---

## 2. **Editing Text Content**

You can edit text content by opening the `.yaml` files in the `contents` folder. Here's how:

### **Hero Section (`hero.yaml`)**

1. Open `contents/hero.yaml`.
2. Update the following fields:
   - `hero_name`: Your name.
   - `hero_title`: Your title (e.g., "Engineering Portfolio").
   - `hero_subtitle`: A short description of what you do.
   - `overview_items`: Update the stats (e.g., years of experience, projects completed).

Example:

```yaml
hero_name: Abhishek Shah
hero_title: Engineering Portfolio
hero_subtitle: Solving complex engineering problems with innovative mechanical design and cross-disciplinary collaboration.
overview_items:
  - title: Years of Experience
    value: 10+
  - title: Projects Completed
    value: 50+
```

---

### **About Section (`about.yaml`)**

1. Open `contents/about.yaml`.
2. Update the following fields:
   - `about_title`: The title of the "About Me" section.
   - `about_description`: A short description about yourself.
   - `skills`: Add or edit your skills (title, description, and image).

Example:

```yaml
about_title: About Me
about_description: I’m a mechanical engineer with 11+ years of experience...
skills:
  - title: Mechanical System Design
    image: skill-1.svg
    description: Design of reliable, high-performance mechanical systems...
```

---

### **Approach Section (`approach.yaml`)**

1. Open `contents/approach.yaml`.
2. Update the `approach_title` and the `items` list to describe your approach.

Example:

```yaml
approach_title: My Approach
items:
  - title: Understand & Define
    description: I begin by deeply understanding the problem...
```

---

## 3. **Adding or Updating Projects**

Projects are stored as `.md` files in the `contents/projects/` folder. Each project has its own file.

### **To Add a New Project**

1. Create a new `.md` file in the `contents/projects/` folder.
2. Use the following template to add your project details:

   ```md
   ---
   title: Project Title
   slug: project-slug
   order: 12
   description: A short description of the project.
   cover: "image-file-name.png"
   tags: [Tag1, Tag2, Tag3]
   images:
     - description: Image Description
       src: "image-file-name.png"
   videos:
     - description: Video Description
       thumbnail: "thumbnail-file-name.png"
       src: "video-link"
   ---

   Note that videos section is optional. `order` controls where the project
   falls in the list on the homepage (lower numbers appear first).

   # Project Title

   ## Requirements:

   Describe the project requirements here.

   ## Responsibilities:

   List your responsibilities here.

   ## Results:

   Highlight the results or achievements here.

   Below Project Title section you can add any additional information or sections as needed.
   ```

3. Save the file with a unique name (e.g., `new-project.md`).

### **Optional: Process Layout**

Most projects use the default layout (text on one side, an image/video gallery
on the other). For a project that's better told as a step-by-step sequence
(e.g. render → prototype → testing → final product), you can opt into the
**process layout** instead: the title appears at the top, followed by a
row of images connected by arrows, with the rest of the content (Requirements,
Responsibilities, Results) below.

To use it, replace `images:` with `process_images:` in the frontmatter:

```md
---
title: Project Title
slug: project-slug
order: 12
description: A short description of the project.
cover: "image-file-name.png"
tags: [Tag1, Tag2, Tag3]
process_images:
  - description: Render
    src: "render.png"
  - description: Prototype
    src: "prototype.png"
  - description: Final Product
    src: "product.png"
---

## Requirements:
...
```

Notes:
- Don't include a `# Project Title` heading in the body when using this
  layout — the title is already rendered above the image row.
- Any number of `process_images` entries works; arrows are added
  automatically between each one.
- A project can use `images`/`videos` (default layout) OR `process_images`
  (process layout), not both.
- A step can be a video instead of an image — add a `thumbnail` field to
  that entry (same as the `videos:` format) and it renders as a playable
  video card instead of a static image.
- To group two or more consecutive steps into a single column (no arrow
  between them), give them the same `group` number:

  ```md
  process_images:
    - description: CAD Model
      src: "cad.png"
    - description: Prototype
      src: "prototype.png"
      group: 1
    - description: Product Testing
      thumbnail: "test-thumb.png"
      src: "test-video.mp4"
      group: 1
  ```

  This renders CAD Model as its own column, then Prototype and Product
  Testing stacked together in the next column — useful when two steps
  don't need their own arrow-separated step, or just to keep the row from
  getting too crowded (fewer columns means each one renders bigger).

- To drop the arrows entirely and just show the images in a plain grid,
  add `process_columns: N` (e.g. `process_columns: 3`) at the top level
  of the frontmatter, alongside `process_images`. Use this when the
  images aren't really a sequence, just a small set of photos to show
  bigger than the default gallery thumbnails.

### **Optional: Split Layout**

For a project with a lot of write-up but only one or two images/videos
that don't need their own gallery, you can use the **split layout**:
the title spans the full width at the top (same as the default layout),
then the body splits into a wide 2/3 text column on the left and a
narrower 1/3 column on the right with the images/videos stacked
vertically.

To use it, add `layout: split` and keep `images:`/`videos:` as normal:

```md
---
title: Project Title
slug: project-slug
order: 12
description: A short description of the project.
cover: "image-file-name.png"
tags: [Tag1, Tag2, Tag3]
images:
  - description: Image Description
    src: "image-file-name.png"
layout: split
---

## Requirements:
...
```

Note: same as the process layout, don't include a `# Project Title`
heading in the body — the title is already rendered above the split.

### **To Edit an Existing Project**

1. Open the `.md` file for the project you want to edit in the `contents/projects/` folder.
2. Update the fields (e.g., `title`, `description`, `tags`, etc.).
3. Save the file.

---

## 4. **Adding or Updating Images**

Images are referenced in the `.yaml` or `.md` files using their file names. To add or update images:

1. Place the image file in the appropriate folder (e.g., `public/images/`).
2. Update the file name in the `.yaml` or `.md` file.

Example:

```yaml
images:
  - description: Prototype
    src: "new-image-file-name.png"
```

---

## 5. **Deploying Changes**

Once you're happy with the updates:

1. Commit your changes using Git.
2. Push the changes to the repository. The website will automatically update.

---

If you have any questions or need further assistance, feel free to reach out!
