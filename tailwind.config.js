/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      keyframes: {
  typing: {
    "0%": {
      width: "0%",
      visibility: "hidden"
    },
    "100%": {
      width: "100%",
      visibility: "visible"
    }
  },
  blink: {
    "0%": {
      borderColor: "white"
    },
    "50%": {
      borderColor: "transparent"
    },
    "100%": {
      borderColor: "white"
    }
  }
},
animation: {
  typing: "typing 3s linear alternate, blink 0.7s"
},
      screens: {
        'xsm': '440px',
         // => @media (min-width: 400px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'media', // or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
}

