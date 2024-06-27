/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FEE290',
        'purple': '#6750A4',
        'error': '#BC0202',
        'image-picker-bg': '#D9D9D9',
        'review-section-border': '#8995A9',
        'link': '#2A7DDC'
      },
      boxShadow: {
        'next-button': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      }
    },
  },
  plugins: [],
}

