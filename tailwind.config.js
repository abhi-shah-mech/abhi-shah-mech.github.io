/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cupcake_custom: {
          primary: "#2563eb",
          secondary: "#7c3aed",
          accent: "#059669",
          neutral: "#1f2937",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "base-content": "#111827",
        },
      },
      "cupcake",
    ],
  },
};
