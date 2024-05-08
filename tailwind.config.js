import { Circle } from 'lucide-react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        "dark": '#232A3C',
        "medium": '#293245',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        elon: "url('./assets/elon.jpg')",
        Logo: "url('./assets/Logo.png')",
        Moon: "url('./assets/moon.svg')",
        Sun: "url('./assets/sun.svg')",
        Gradient: "url('./assets/Gradient.svg')",
        Hero:"url('./assets/img/aboutMe.png')",
        Ring: "url('./assets/shapes/ring.png')",
        circle: "url('./assets/shapes/circle.png')",
        Half:"url('./assets/shapes/half-ring.png')",
        second:"url('./assets/shapes/second-circle.png')",
        p1: "url('./assets/img/portfolio/1.jpg')",
      },
      
    },
  },
    // ...
  plugins: [],
}

