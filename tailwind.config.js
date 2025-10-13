/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js", // 👈 add this
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // 👈 add this
  ],
};
