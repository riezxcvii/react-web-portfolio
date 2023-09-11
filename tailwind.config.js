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
      lightPeach: "#DF7857",
      peach: "#D68060",
      darkPeach: "#BA6B57",
    },
  },
  plugins: [require("flowbite/plugin")],
};
