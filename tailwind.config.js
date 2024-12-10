/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica', 'sans-serif'],
        'patrizia': ['Patrizia', 'sans-serif'],
      },
      colors: {
        'main-white': 'var(--bg-white-main)',
        'loading-color': 'var(--bg-loading-color)',
        'button': 'var(--bg-button)',
        'black-main': 'var(--black-main)',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
        
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards'
      }
    },
  },
  plugins: [],
  variants: {},
  corePlugins: {
    // ... other core plugins
  },
  // Add this to your base styles
  variants: {
    extend: {},
  },
}
