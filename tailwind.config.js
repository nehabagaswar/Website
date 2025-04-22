/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        teal: {
          50: '#E6FFFA',
          100: '#B2F5EA',
          200: '#81E6D9',
          300: '#4FD1C5',
          400: '#38B2AC',
          500: '#319795',
          600: '#2C7A7B',
          700: '#285E61',
          800: '#234E52',
          900: '#1D4044',
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInUp: 'fadeInUp 1s ease-in-out',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};