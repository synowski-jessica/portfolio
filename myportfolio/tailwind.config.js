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
    },
  },
  plugins: [],
};
