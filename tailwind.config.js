/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#f7f6f2',
        fg:      '#141414',
        muted:   '#888888',
        border:  '#e0dfd9',
        surface: '#f0efe9',
      },
      fontFamily: {
        serif: ['Satoshi', 'system-ui', 'sans-serif'],
        sans:  ['Satoshi', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        portfolio: '1100px',
      },
    },
  },
  plugins: [],
}
