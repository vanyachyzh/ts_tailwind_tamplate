import { createThemes } from 'tw-colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Lora: 'Lora',
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        primary: 'pink',
        secondary: 'green'
      },
      dark: {
        primary: 'purple',
        secondary: 'orange'
      },
    }),
  ],
};
