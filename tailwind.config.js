/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      borderColor: { blue: '#288092' },
      colors: {
        myColor: '#7caa06',

        'turtle-green': {
          50: '#faffe6',
          100: '#f4fec9',
          200: '#e7fd99',
          300: '#d5f95d',
          400: '#bfef2c',
          500: '#a0d50d',
          600: '#7caa06',
          700: '#5e810a',
          800: '#4b660e',
          900: '#3f5611',
          950: '#203003',
        },

        'cocoa-bean': {
          50: '#fcf4f5',
          100: '#f9e7e8',
          200: '#f6d2d5',
          300: '#eeb3b8',
          400: '#e2878e',
          500: '#d36069',
          600: '#bf434d',
          700: '#a0353e',
          800: '#852f36',
          900: '#6f2d32',
          950: '#49181c',
        },
      },
    },
  },
  plugins: [],
};
