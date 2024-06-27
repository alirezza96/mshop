/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "gray": "#ccc",
      "white": "#eee",
      "pink": "#F72585",
      "Fuchsia": "#B5179E",
      "Purple": "#7209B7",
      "dark-purple": "#480CA8",
      "Dark_Blue": "#3F37C9",
      "Blue": "#4361EE",
      "Light-Blue": "#4895EF"
    },
    fontFamily: {
      "dana": ["var(--font-dana)", "sans-serif"],
      "morabba": ["var(--font-morabba)", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "8px"
      }
    },
    screens: {
      "tablet": "768px",
      "laptop": "1024px",
      "tv": "1280px"
    }
  },
  plugins: [],
};
