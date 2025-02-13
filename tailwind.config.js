/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'custom-green': '#8CDA70',
      'custom-green-cta': '#6AB850',
      'custom-purple': '#7F72CD ',
    },},
  },
  plugins: [],
}