import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4b888d',
        secondary: '#051524',
        danger: '#f07f7b',
      },
    },
  },
  plugins: [],
} satisfies Config;
