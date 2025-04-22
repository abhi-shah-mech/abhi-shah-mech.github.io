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

   Note that videos section is optional.

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
