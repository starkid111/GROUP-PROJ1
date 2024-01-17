/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{html,js}",
],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      
    },
    extend: {
      textUnderLineOffset: {
        2: "2px",
      },
      colors: {
        theBlueHere: "#0B153C"

      }
    },
  },
  plugins: [],
}

