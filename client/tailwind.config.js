/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
import tailwindScrollbar from "tailwind-scrollbar";
import lineClamp from "@tailwindcss/line-clamp";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite, tailwindScrollbar, lineClamp],
};
