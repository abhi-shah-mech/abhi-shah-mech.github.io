/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cupcake_custom: {
          primary: "#c08050",      // copper/bronze accent
          secondary: "#a06840",    // darker copper
          accent: "#d4956a",       // lighter copper highlight
          neutral: "#1c1a18",      // deep warm charcoal (background)
          base-100: "#f5f0eb",     // warm off-white/cream
          base-200: "#e8e0d8",     // light warm gray
          base-300: "#d4ccc4",     // medium warm gray
          base-content: "#262220", // dark charcoal for text
        },
      },
      "cupcake",
    ],
  },
};
