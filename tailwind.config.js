/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monument': ['Monument Extended', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#1a1363',
        secondary: '#332f64',
        accent: '#ffff7d',
        cream: '#fffadf',
        gray: '#3e3e3e',
      },
    },
  },
  plugins: [],
}