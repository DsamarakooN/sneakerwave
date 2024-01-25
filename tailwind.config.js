/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['20px', '21.94px'],
      xl: ['24px', '29.38px'],
      '2xl': ['32px', '29.26px'],
      '3xl': ['36px', '50px'],
      '4xl': ['49px', '60px'],
      '8xl': ['84px', '65px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "primary-b": "#1F1F1F",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "gr-top": "#E39C71",
        "gr-bottom": "#F4C493",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        'ms': '320px',  // Mobile small
        'mm': '375px',  // Mobile medium
        'ml': '425px',  // Mobile large
        'tab': '768px',    // Tablet
        'lap': '1024px',   // Laptop
        'desktop': '1440px',  // Desktop
      }
    },
  },
  variants: {
    extend: {
      fill: ['hover'], // Enable hover variants for fill colors
      stroke: ['hover'], // Enable hover variants for stroke colors
    },
  },
  plugins: [],
}