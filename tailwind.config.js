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
        center: true, // Centers the container
        padding: {
          DEFAULT: '1rem',  // 16px
          sm: '2rem',       // 32px
          md: '3rem',       // 48px
          lg: '4rem',       // 64px
          xl: '5rem',       // 80px
          '2xl': '6rem',    // 96px
        },
      },
      colors: {
        primary: {
          DEFAULT: '#1D4ED8', // Light mode primary color
          dark: '#7c3aed', // Dark mode primary color
        },
        secondary: {
          DEFAULT: '#1D4ED8', // Light mode secondary color
          dark: '#7c3aed', // Dark mode secondary color
        },
        ternary: {
          DEFAULT: '#1D4ED8', // Light mode ternary color
          dark: '#4F46E5', // Dark mode ternary color
        },
      },
    },
  },
  plugins: [],
}
