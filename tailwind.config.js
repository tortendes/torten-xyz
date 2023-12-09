/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'navbar-button': "url('/trtn-static/backgrounds/navbarbutton.png')",
        'header': "url('/trtn-static/backgrounds/header-bg.png')"
      }
    },
    fontFamily: {
      'sans': ['Outfit', ...defaultTheme.fontFamily.sans],
      'handwriting': ['Work Sans', 'sans-serif']
    }
  },
  plugins: []
};