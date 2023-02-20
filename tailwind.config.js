/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
      },
      colors: {
        light: "#EEEBE9",
        dark: "#F2EFED",
        blue: "#0077B3",
        orange: "#cc4100"

      },
      gap: {
        30: "1.875rem"
      },
      padding: {

        15: "0.9375rem",
        26: "1.625rem",
        30: "1.875rem",
        134: "8.375rem"
      }
    },
  },
  plugins: [],
}
