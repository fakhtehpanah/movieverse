/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [

    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myYellow: 'rgb(245,197,24)'
      }
    },
  },
  plugins: [],
}

