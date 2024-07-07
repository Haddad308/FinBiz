/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    // colors: {
    //   primary: "#000000"
    // },
    extend: {
      colors: {
        customGray: "rgba(155, 156, 161, 1)",
        blackGray: "rgba(59, 59, 59, 1)",
        darkGray: "#1d1c20",
        lightGray: "#f6f6f6",
        primaryDark: "rgba(29, 28, 32, 1)"
      }
    }
  },
  darkMode: "class",
  plugins: [nextui()]
};
