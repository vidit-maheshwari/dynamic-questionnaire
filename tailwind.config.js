/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['Poppins']
      },
      backgroundImage: {
        'hero': "url('./src/components/background/bc32b70c-93a8-4af1-8fe3-6baa0b9c5d36.jpg')",
      },
  }
    },
  plugins: [],
}

