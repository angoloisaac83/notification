/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'smm': {'max': '400px'}
      }
    },
  },
  plugins: [],
}