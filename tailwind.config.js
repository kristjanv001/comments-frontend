/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
  content: ["./src/**/*.{html,ts}", "./src/app/ui/**/*.{html,ts}"],
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
        "spanish-grey": "#979797"
      },
      gridAutoColumns: {
        min: "min-content",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
