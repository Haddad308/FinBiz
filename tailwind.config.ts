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
    extend: {
      borderColor: {},
      backgroundImage: {
        gradient: "linear-gradient( rgba(255, 255, 255, 0.6), rgba(163, 220, 47, 0.6))",
        bgSplit: "linear-gradient(rgba(29, 28, 32, 1) 50%, #000000 50%, #000000)",
        bgSplitLight: "linear-gradient(#f6f6f6 50%, #f2f2f2 50%, #f2f2f2)",
        bgRadial: "radial-gradient(50% 50% at 50% 50%, rgba(163, 220, 47, 0.5) 0%, rgba(255, 255, 255, 0) 100%)"
      },
      colors: {
        customGray: "rgba(155, 156, 161, 1)",
        blackGray: "rgba(59, 59, 59, 1)",
        darkGray: "#1d1c20",
        lightGray: "#f6f6f6",
        primaryDark: "rgba(29, 28, 32, 1)",
        bgSplit: "linear-gradient(rgba(29, 28, 32, 1) 50%, #000000 50%, #000000)",
        bgSplitLight: "linear-gradient(#f6f6f6 50%, #f2f2f2 50%, #f2f2f2)",
        danger: "#ffffff" // Added white color
      }
    }
  },
  darkMode: "class",
  plugins: [nextui()]
};
