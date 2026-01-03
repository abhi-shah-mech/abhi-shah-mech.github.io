/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cupcake_custom: {
          // soft “cupcake” accents
          primary: "#f472b6",        // pink
          secondary: "#a78bfa",      // purple
          accent: "#34d399",         // mint
          neutral: "#0b1220",

          // dark bases + light text (this is the important part)
          "base-100": "#0b1220",     // page background
          "base-200": "#111a2e",     // cards/sections
          "base-300": "#1b2a4a",     // borders/deeper surfaces
          "base-content": "#e5e7eb", // text color
        },
      },
      "cupcake",
    ],
  },
};
