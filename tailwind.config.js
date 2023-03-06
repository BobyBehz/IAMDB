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
        'secondary-color' : '#EEEBDD',
        'fade-secondary-color' : 'rgb(238, 235, 221, 0.2)'
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
