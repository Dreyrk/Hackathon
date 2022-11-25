/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#30a299",
        secondary: "#ffe8a5",
        hover: "#33a198",
      },
      boxShadow: {
        footer: "0px -2px 5px 0px #000000",
      },
    },
  },
  plugins: [],
};
