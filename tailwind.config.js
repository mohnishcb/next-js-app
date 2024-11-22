/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // This line is important
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@mantine/core/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A73E8', // Blue
          50: '#E8F0FE',
          100: '#D2E3FC',
          200: '#A9CBF9',
          300: '#76AAEE',
          400: '#4285F4',
          500: '#1A73E8',
          600: '#1765CB',
          700: '#144DA8',
          800: '#123B85',
          900: '#102B67',
        },
        black: {
          DEFAULT: '#000000',
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        red: {
          DEFAULT: '#E53935',
          50: '#FFE9E8',
          100: '#FFC1C0',
          200: '#FF8F8D',
          300: '#FF5E5C',
          400: '#E53935',
          500: '#C62828',
          600: '#B71C1C',
          700: '#A11717',
          800: '#8C1212',
          900: '#750D0D',
        },
        green: {
          DEFAULT: '#43A047',
          50: '#E7F6E8',
          100: '#C3E8C5',
          200: '#93D69B',
          300: '#62C572',
          400: '#43A047',
          500: '#388E3C',
          600: '#2E7D32',
          700: '#246E28',
          800: '#1A5C20',
          900: '#124418',
        },
        white: {
          DEFAULT: '#FFFFFF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FFFFFF',
          600: '#E6E6E6',
          700: '#CCCCCC',
          800: '#B3B3B3',
          900: '#999999',
        },
      },
    },
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1280px',
    // },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [
    // [
    //   function ({ addVariant }) {
    //     addVariant('light', ({ modifySelectors, separator }) => {
    //       modifySelectors(({ className }) => {
    //         return `.light .${className}`; // Matches elements inside a `.light` class
    //       });
    //     });
    //   },
    // ],
  ],
};
