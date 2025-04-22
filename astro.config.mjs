// @ts-check
import yaml from "@rollup/plugin-yaml";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), yaml()],
  },
  site: "https://evokeapps.github.io/abhishah",
  base: "abhishah",
  integrations: [react()],
  output: "static",
});
