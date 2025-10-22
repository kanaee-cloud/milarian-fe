/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000957',
        accent: '#FFEB00',
        light: "#E4F1FF",
        navy: "#27005D",
        blue: "#344CB7"

      },
      backgroundImage: {
        hero: "url('/assets/hero.png')",
      }
    },
  },
  plugins: [],
}

