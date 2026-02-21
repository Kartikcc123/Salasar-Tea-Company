/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        royal: {
          950: '#050404', // Almost black
          900: '#0a0908', // Deep Black/Brown background
          800: '#1c1917', // Lighter card background
          700: '#292524', // Borders
        },
        gold: {
          400: '#FAD6A5', // Champagne Gold (Text highlights)
          500: '#D4AF37', // Metallic Gold (Main Brand Color)
          600: '#AA8C2C', // Deep Gold (Shadows)
        }
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #FAD6A5 50%, #AA8C2C 100%)',
        'gradient-dark-radial': 'radial-gradient(circle at center, #1c1917 0%, #0a0908 100%)',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(212, 175, 55, 0.15)', // Subtle gold glow
        'glow-strong': '0 0 30px rgba(212, 175, 55, 0.3)', // Hover glow
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}