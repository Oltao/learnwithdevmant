/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundimg': "url('./src/assets/images/BackgroundImg.jpg')",
      },
      fontFamily: {
        poppins: 'Poppins, ui-serif', // Adds a new `font-poppins` class
        roboto: 'Roboto Condensed, ui-serif', // Adds a new `font-roboto` class
      }
    },
  },
  plugins: [],
}

