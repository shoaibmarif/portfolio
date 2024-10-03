/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        primary: {
          DEFAULT: '#1D4ED8', // Light mode primary color
          dark: '#7c3aed', // Dark mode primary color
        },
        secondary: {
          DEFAULT: '#1D4ED8', // Light mode primary color
          dark: '#7c3aed', // Dark mode primary color
        },
        ternary: {
          DEFAULT: '#1D4ED8', // Light mode primary color
          dark: '#4F46E5', // Dark mode primary color
        },
      },
    },
  },
  plugins: [],
}
