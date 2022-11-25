/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {

    },
    extend: {
      colors: {
        primary: "#30a299",
        secondary: "#ffe8a5",
        button: "#FF855F",
        bg: "#5D4ADF"
      },
      boxShadow: {
        footer: "0px -2px 5px 0px #000000",
      },

      backgroundImage: {
        'hero': "url('https://i.imgur.com/UPiyYV4.png')",
      },
    },
  },
  plugins: [],
};
