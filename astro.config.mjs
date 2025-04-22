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
  site: "https://abhi-shah-mech.github.io",
  base: "",
  integrations: [react()],
  output: "static",
});
