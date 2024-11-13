/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This includes all JS/JSX/TS/TSX files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Adding Oswald font
        raleway: ["Raleway", "sans-serif"], // Adding Raleway font
        metropolis: ["Metropolis", "sans-serif"],
      },
      colors: {
        primary: "#007EE8",
      },
      fontWeight: {
        custom: 420,
      },
      boxShadow: {
        'custom': '0px 2.76px 5.51px 0px #0000000A',
      },
    },
  },
  plugins: [],
};
