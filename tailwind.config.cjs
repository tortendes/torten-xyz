/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        'torten': {
          'orange': '#EC7C26',
          'red': '#E63244',
          'yellow': '#F3DA0B',
          'green': '#497E76'
        }
      }
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
