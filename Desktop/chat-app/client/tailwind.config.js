/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { // 'colo' değil, 'colors' olarak yazıldığından emin olun
        primary: "#00acb4",
        secondary: "#00848e",
      }
    },
  },
  plugins: [],
};
