/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },

    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif,'], 
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      position: ['responsive', 'hover', 'focus', 'sticky'], // Ensure 'sticky' is enabled
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

