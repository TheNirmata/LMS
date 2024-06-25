/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#6750A4',
        'error': '#BC0202'
      },
      boxShadow: {
        'next-button': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      }
    },
  },
  plugins: [],
}

