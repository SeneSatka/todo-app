/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        bgDark: "rgb(31 41 55)",
        borderDark: "rgb(75 85 99)",
      },
    },
  },
  plugins: [],
};
