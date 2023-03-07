/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: '#F3C507',
        blue: '#0207FF',
        'text-color': '#2A2A2A'
      }
    },
    fontFamily: {
      title: ['Playfair Display'],
      text: ['Questrial']
    },
  },
  plugins: [],
};
