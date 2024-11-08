/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This includes all JS/JSX/TS/TSX files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
<<<<<<< HEAD
        inter: ["Inter", "sans-serif"], // Adding Inter font
        metropolis: ["Metropolis", "sans-serif"],
=======
        inter: ['Inter', 'sans-serif'], // Adding Oswald font
        raleway: ['Raleway', 'sans-serif'], // Adding Raleway font
        metropolis: ["Metropolis", "sans-serif"],
      },
      colors: {
        primary: "#007EE8",
      },
      fontWeight: {
        'custom': 420,
>>>>>>> f7ce5a30d6840c512b47a8c541574ad9547de697
      },
      colors: {
        primary: "#007EE8",
      },
    },
  },
  plugins: [],
};
