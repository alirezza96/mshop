/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "white": "#fff",
      "black": "#000",
      "light-gray": "#f6f8fc",
      "gray": "#ccc",
      "green": "#25f7aa",
      "lavender": "#E6E6FA",
      "pink": "#F72585",
      "Fuchsia": "#B5179E",
      "Purple": "#7209B7",
      "dark-purple": "#480CA8",
      "Dark-Blue": "#3F37C9",
      "Blue": "#4361EE",
      "Light-Blue": "#4895EF",
      "transparent": "transparent"
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "8px"
      }
    },
    screens: {
      "xs": "480px",
      "sm": "576px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px"
    },
    // keyframes: {
    //   shimmer: {
    //     '100%': {
    //       transform: 'translateX(100%)',
    //     },
    //   },
    // },
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
      },
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*")
      addVariant("child-hover", "&>*:hover")
    }
  ],


};
