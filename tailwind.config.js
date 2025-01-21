import { palette } from "./src/assets/colors/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: palette.primary,
      },
    },
  },
  plugins: [],
};
