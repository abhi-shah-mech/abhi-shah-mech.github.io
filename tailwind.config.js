/** @type {import('tailwindcss').Config} */
import themes from "daisyui/src/theming/themes";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cupcake_structured: {
          ...themes.cupcake,

          // Darken surface separation
          "base-300": "#d2cbc5",
        },
      },
    ],
  },
};
