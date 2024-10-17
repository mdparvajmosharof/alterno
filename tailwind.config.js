/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          prothom : '#00bf8f',
          doi : '#001510'
        }
    },
  },
  darkMode: 'class',
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light', 'dark'],
  },
}

