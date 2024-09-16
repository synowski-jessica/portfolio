/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorMarron: "#BD9488",
        colorMarronFonce: "#623728",
        colorRoseBackground: "#E8BCB3",
        colorRoseNav: "#FFE4DD",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 1.5s ease-out forwards",
        slideOut: "slideOut 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
