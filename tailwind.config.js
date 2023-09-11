/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      dirtyWhite: "#e5e0ff",
      lightPeach: "#d09b8e",
      peach: "#c98c7c",
      darkPeach: "#c27d6b",
    },
  },
  plugins: [require("flowbite/plugin")],
};
