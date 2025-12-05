/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secomm: {
          blue: '#0054a6',
          'blue-light': '#0066cc',
          'blue-dark': '#004080',
        },
      },
    },
  },
  plugins: [],
}

