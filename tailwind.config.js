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
      rust: "#C36A2D",
      lightBeige: "#C8BF93",
      beige: "#BFB790",
      darkBeige: "#BAAB80",
      pastelBeige: "#C2B897",
    },
  },
  plugins: [require("flowbite/plugin")],
};
