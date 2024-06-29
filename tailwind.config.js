/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilita o modo escuro usando uma classe
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter-tight': ['"Inter Tight"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      colors: {
        background: '#f7f7f7',
        light: {
          Base: '#FFFFFF',
          50: '#FAFAFA',
          100:'#F5F5F5',
          200:'#E5E5E5',
          300:'#D4D4D4',
          400:'#A3A3A3',
          500:'#737373',
          600:'#525252',
          700:'#404040',
          800:'#262626',
          900:'#171717',
          950:'#0A0A0A'
        },
        dark: {
          Base:'#000000',
          50: '#0A0A0A',
          100: '#171717',
          200: '#262626',
          300: '#373737',
          400: '#525252',
          500: '#8A8A8A',
          600: '#A3A3A3',
          700: '#D4D4D4',
          800: '#E5E5E5',
          900: '#FAFAFA',
          950:'#F5F5F5'
        },
        green: {
          'green': '#3A5B22',
        },
        button: {
          green: '#3A5B22'
        }
      },
    },
  },
  plugins: [],
}
