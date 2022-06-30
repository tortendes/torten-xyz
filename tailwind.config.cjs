/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
