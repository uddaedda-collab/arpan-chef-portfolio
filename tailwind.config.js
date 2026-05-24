/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chef-black': '#0a0a0a',
        'chef-charcoal': '#1a1a1a',
        'chef-gold': '#c9a84c',
        'chef-copper': '#b87333',
        'chef-orange': '#e8651a',
        'chef-cream': '#f5f0e8',
        'chef-silver': '#c0c0c0',
        'chef-warm': '#2a1f14',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'steam': 'steam 3s ease-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotateY(0deg)' },
          '50%': { transform: 'translateY(-15px) rotateY(5deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(201, 168, 76, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(201, 168, 76, 0.6)' },
        },
        steam: {
          '0%': { opacity: '0', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '0.6' },
          '100%': { opacity: '0', transform: 'translateY(-80px) scale(2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
