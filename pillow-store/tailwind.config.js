/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'light-orange': '#FFF7F0',
        'light-stroke-orange': '#ECE5DE',
        'text-color': '#121212',
        'light-blue-bg': '#B3CDE8',
        'medium-blue-bg': '#E0EBFA',
        'para-text-color': '#4D4C4C',
      },
      fontFamily: {
        favorit: ['FavoritC', 'sans-serif'], // Add a fallback font
      },
    },
  },
  plugins: [],
}

