/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      roboto: ['Roboto', 'sans-serif'],
      outfit: ['Outfit', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif']

    },
  },
  plugins: [],
}