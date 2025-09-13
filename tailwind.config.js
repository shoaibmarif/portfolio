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
        center: true,
        padding: {
          DEFAULT: '1rem',
          xs: '0rem',
          sm: '2rem',
          md: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        primary: {
          DEFAULT: '#962cff',
          dark: '#962cff',
        },
        secondary: {
          DEFAULT: '#1D4ED8',
          dark: '#7c3aed',
        },
        ternary: {
          DEFAULT: '#1D4ED8',
          dark: '#4F46E5',
        },
      },
    },
    screens: {
      "xs": "360px", // Small mobile devices
      "sm": "480px", // Large mobile devices
      "md": "768px", // Tablets
      "lg": "1024px", // Laptops
      "xl": "1280px", // Desktops
      "2xl": "1536px", // Large screens
      "3xl": "1920px", // 1080p Full HD
      "4xl": "2560px", // 2K monitors
    },
  },
  plugins: [],
}
