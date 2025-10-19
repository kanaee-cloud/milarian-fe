/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#6F00FF',
        light: "#E4F1FF",
        navy: "#27005D",
        blue: "#AED2FF"

      }
    },
  },
  plugins: [],
}

