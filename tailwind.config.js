/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{vue,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#1a1c1d",
        borderDark: "rgb(75 85 99)",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
