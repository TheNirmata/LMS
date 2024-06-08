/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange-light': '#FEE290',
        'orange-dark': '#FBBC05',
        'gray-light': '#E7EAEE',
        'gray-dark': '#8995A9'
      },
      boxShadow: {
        'next-button': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      }
    },
  },
  plugins: [],
}

