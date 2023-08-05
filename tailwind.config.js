/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      dirtyWhite: "#F4F4F4",
      rust: "#C36A2D",
      lightBeige: "#EADCA6",
      beige: "#E2C275",
      darkBeige: "#deb960",
    },
  },
  plugins: [require("flowbite/plugin")],
};
