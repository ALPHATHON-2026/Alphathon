/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2e4729",
        "primary-light": "#4a6b42",
        "primary-dark": "#1a2b17",
        "primary-hover": "#3a5933",
        "secondary": "#a7b6a4",
        "sand": "#f3f0e7",
        "earth": "#8c705f",
        "forest-dark": "#0f1a15",
        "background-light": "#f7f7f6",
        "background-dark": "#171c16",
        "accent-leaf": "#8ba888",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "glass-bg": "rgba(23, 28, 22, 0.50)",
        "glass": "rgba(255, 255, 255, 0.05)",
        "glass-stroke": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        "display": ["Cinzel", "serif"],
        "serif": ["Cinzel", "serif"],
        "body": ["Unna", "serif"],
        "sans": ["Unna", "serif"],
      },
      backgroundImage: {
        'botanical-pattern': "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2727&auto=format&fit=crop')",
        'orb-gradient': 'radial-gradient(circle at 30% 30%, #f4c025 0%, #d97706 40%, #78350f 80%, #000000 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float-delay 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'spin-slow': 'spin 60s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-delay': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(244, 192, 37, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(244, 192, 37, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(244, 192, 37, 0.1)' },
        }
      }
    },
  },
  plugins: [],
}
