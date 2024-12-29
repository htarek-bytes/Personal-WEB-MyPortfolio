module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00FFFF',
        neonPurple: '#A020F0',
        neonPink: '#FF1493',
        neonGreen: '#39FF14',
        spaceBlack: '#0B0C10',
        spaceGray: '#1F2833',
      },
      fontFamily: {
        techno: ['Orbitron', 'sans-serif'],
        futuristic: ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
