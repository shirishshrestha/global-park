/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.html", "./src/**/*.{js,ts,html}"],
  theme: {
    extend: {},
    colors: {
      primary: "#223EF8",
      secondary: "#4DA4E0",
      accent: "#4BB6C6",
      background: "#b6e2ff49",
      darkblue: "#03548a",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
