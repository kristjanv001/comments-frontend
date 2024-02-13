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
        "light-grayish-blue": "#C5C6EF",
        "dark-blue": "#334253",
        "moderate-blue": "#5357B6",
        "grayish-blue": "#67727E",
        "soft-red": "#ED6368",
        "pale-red": "#FFB8BB",
      },
      gridAutoColumns: {
              'min': 'min-content',
            }
    },
  },
  variants: {
      fill: ['hover', 'focus'],
    },
  plugins: [
    require('flowbite/plugin')
  ],
}
