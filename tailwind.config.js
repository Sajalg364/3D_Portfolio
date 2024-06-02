/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#050816",
        primary: "#060407",
        // main: "#915eff",
        main: "#02E2F2",
        // main: "red",
        secondary: "#aaa6c3",
        // tertiary: "#151030",
        tertiary: "#000814",
        "black-100": "black",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "white-200": "#dee2e6",
      },
      boxShadow: {
        // card: "0px 35px 120px -15px #211e35",
        card: "0px 8px 70px -15px #111e35",
        card2: "0px 200px 120px -15px white",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};