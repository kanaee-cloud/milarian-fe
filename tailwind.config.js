/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3D0000',
        accent: '#FF0000',
        light: '#E4F1FF',
        red: '#950101',
        gray: '#212121',
        dark: '#171717',
      },
      backgroundImage: {
        hero: "url('/assets/hero.png')",
      },
    },
  },
  plugins: [],
}
