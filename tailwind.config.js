/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        headerHeight: "5.5rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
