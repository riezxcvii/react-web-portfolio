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
      lightBeige: "#EADCA6",
      beige: "#BFB790",
      darkBeige: "#BEAF84",
      pastelBeige: "#C2B897",
    },
  },
  plugins: [require("flowbite/plugin")],
};
