/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite/**/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
