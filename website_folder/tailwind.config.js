/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5f7',
          100: '#ffebee',
          200: '#ffccdd',
          300: '#ff99bb',
          400: '#ff6699',
          500: '#ff3377',
          600: '#e62e6a',
          700: '#cc295d',
          800: '#b32450',
          900: '#991f43',
        },
        secondary: {
          50: '#fffdf5',
          100: '#fffbea',
          200: '#fff5d4',
          300: '#ffedd9',
          400: '#ffe6c2',
          500: '#ffdeaa',
          600: '#e6c799',
          700: '#ccaf88',
          800: '#b39877',
          900: '#998166',
        },
      },
      fontFamily: {
        brand: ['"Comic Sans MS"', '"Arial Rounded MT Bold"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
