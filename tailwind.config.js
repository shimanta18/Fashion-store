
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      
        oxivos: {
          dark: '#120c08',   // Rich espresso / dark brown
          light: '#faf9f6',  // Warm cream / off-white
          clay: '#2d2117',   // Muted brown border
          sand: '#e5dfd3',   // Soft beige border
        }
      }
    },
  },
  plugins: [],
}