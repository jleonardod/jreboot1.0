/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#093640',
        secondary: '#176273',
        third: '#04BF9D',
        fourth: '#38F2AE',
        five: '#35F29A'
      }
    },
  },
  plugins: [],
}