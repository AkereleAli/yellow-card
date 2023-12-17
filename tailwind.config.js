/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      jost: ['jost', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        pattern: "url('/src/assets/purplepattern.svg')",
        yellowpat: "url('/src/assets/yellowpattern.svg')"
      }
    },
  },
  plugins: [],
}