/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    container: {
      center: true
    },
    extend: {
      colors: {
        'light-red' : '#CE1212',
        'secondary-color' : '#EEEBDD'
      },
      screens: {
        'xl': '1200px',
        '2xl' : '1200px'
      },
     fontFamily: {
      'roboto' : 'roboto'
     }
    },
  },
  plugins: [],
}
