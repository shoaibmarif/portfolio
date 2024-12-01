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
          DEFAULT: '2rem',
          sm: '2rem',
          md: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        primary: {
          DEFAULT: '#1D4ED8',
          dark: '#7c3aed',
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
      "sm": '640px',
      "md": '768px',
      "lg": '1024px',
      "xl": '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
