/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'axa-blue': '#003399', // Official AXA Blue
        'cyber-blue': '#00f2ff', // Neon contrast
        'slate-950': '#020617',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      boxShadow: {
        'cyber-glow': '0 0 20px rgba(0, 242, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
