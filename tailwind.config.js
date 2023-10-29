/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        'inner-box': 'inset 0px 0px 24px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}