/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
  "./src/components/*.{vue,js}",
  "./src/components/**/*.{vue,js}",
  "./pages/**/*.vue",
  "./nuxt.config.{js,ts}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-indigo': '#45469D',
        'brand-orange': '#EF8660',
        'brand-teal': '#259283',
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
