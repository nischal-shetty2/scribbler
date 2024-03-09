/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      invert: {
        10: ".1",
        25: ".25",
        50: ".5",
        75: ".75",
        100: "1",
      },
    },
  },
  plugins: [],
};
