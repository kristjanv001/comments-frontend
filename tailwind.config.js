/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#E9EBF0",
        "very-light-gray": "#F5F6FA",
        "dark-blue": "#334253",
        "grayish-blue": "#67727E",
        "light-grayish-blue": "#C5C6EF",
        "soft-red": "#ED6368",
        "moderate-blue": "#5357B6"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
