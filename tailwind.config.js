/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'wave': 'wave 55s infinite linear',
        'wave-slow': 'wave 50s infinite linear',
        'wave-slower': 'wave 45s infinite linear',
        'rotBGimg': 'rotBGimg 8s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': '0% 50%',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': '100% 50%',
          },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotBGimg: {
          'from': { 
            transform: 'rotate(0deg)',
          },
          'to': { 
            transform: 'rotate(360deg)',
          },
        }
      },
    },
  },
  plugins: [],
};
