/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // 'custom': '25px 25px 4px 0 rgba(0, 0, 0, 0.25)',
      },      
      width: {
        'custom': '90%',
        'custom-indiv': '90%',
        'custom-md': '60%'
      },
      colors: {
      'custom-green': '#8CDA70',
      'custom-green-cta': '#6AB850',
      'custom-purple': '#7F72CD',
      'custom-purple-secondary': '#c5bee6',
      'custom-purple-cta': '#574e8a'
    },},
  },
  plugins: [],
}