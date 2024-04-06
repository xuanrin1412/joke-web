/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['"Poppins"', ...defaultTheme.fontFamily.sans],
        'RedHatDisplay': ['"Red Hat Display"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'header': '0 2px 4px  rgba(0,0,0,0.24)',
        'btn': 'inset 0 -2.5px 1px  rgba(0, 0, 0, 0.15); '
      }

    },
  },
  plugins: [],
}

