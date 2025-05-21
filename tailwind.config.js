/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4D4D4D',
        secondary: '#898989',
        tertiary: '#D9D9D9',
        googleBlue: '#4286F5',
      }
    },
  },
  plugins: [],
}
