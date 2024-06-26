/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "pink": "#F72585",
      "Fuchsia": "#B5179E",
      "Purple": "#7209B7",
      "dark-purple": "#480CA8",
      "Dark_Blue": "#3F37C9",
      "Blue": "#4361EE",
      "Light-Blue": "#4895EF"
    }
  },
  plugins: [],
};
