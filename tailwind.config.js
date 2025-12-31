/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4fdf7',
          100: '#e9fbe9',
          200: '#CDDF7D', // Lime
          300: '#A4EAB5', // Mint
          400: '#6bc985',
          500: '#3ba862',
          600: '#006937', // Main Green
          700: '#00542c',
          800: '#004022',
          900: '#002c17',
          DEFAULT: '#006937',
        },
        secondary: {
          50: '#f2f9fb',
          100: '#CAEAF2', // Light Blue
          200: '#a5dbe9',
          300: '#7ecbe0',
          400: '#56bbd7',
          500: '#2eaace',
          600: '#064D5F', // Main Blue
          700: '#053e4c',
          800: '#042e39',
          900: '#021f26',
          DEFAULT: '#064D5F',
        },
        slate: {
          950: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
