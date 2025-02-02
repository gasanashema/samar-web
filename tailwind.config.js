/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgb(37, 99, 235 , 0) 0%, transparent 100%)',
      },
  },
  plugins: [],
}
