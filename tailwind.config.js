/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'crt-black': '#080808',     // Deepest black background
        'crt-panel': '#141414',     // Slightly lighter for panels/cards
        'phosphor-green': '#39ff14', // Classic neon green
        'alert-amber': '#ffb000',   // Warning orange/yellow
        'system-cyan': '#00f3ff',   // Cyan for data lines
      },
      fontFamily: {
        'mono': ['"Share Tech Mono"', 'monospace'], // The new industrial font
      },
      backgroundImage: {
        // Creates the subtle grid pattern on the background
        'grid-pattern': "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        }
      }
    },
  },
  plugins: [],
}