/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(100px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        fadeOut: {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
            visibility: "visible",
          },
          to: {
            opacity: "0",
            transform: "translateY(100px)",
            visibility: "hidden",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
      },
    },
    screens: {
      "<2xl": { max: "1535px" },

      "<xl": { max: "1279px" },

      "<lg": { max: "1023px" },

      "<md": { max: "767px" },
    },
  },
  plugins: [],
};
