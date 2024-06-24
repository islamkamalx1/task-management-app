/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#365E32",
        secondary: "#81A263",
        yellow: "#E7D37F",
        orange: "#FD9B63",
      },
      fontFamily: {
        rubik: [" Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
