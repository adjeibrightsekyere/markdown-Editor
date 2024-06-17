/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif,'], 
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

