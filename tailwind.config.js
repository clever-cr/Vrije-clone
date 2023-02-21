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
      screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
      },
      colors: {
        light: "#EEEBE9",
        dark: "#F2EFED",
        blue: "#0077B3",
        orange: "#cc4100",
        darkgray: "#333333"

      },
      gap: {
        30: "1.875rem"
      },
      padding: {

        15: "0.9375rem",
        26: "1.625rem",
        30: "1.875rem",
        134: "8.375rem"
      },
      boxShadow: {
        medium: "0 0 60px 0 rgb(0 0 0 / 10%)"
      }
    },
  },
  plugins: [],
}
