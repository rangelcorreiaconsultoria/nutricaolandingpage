import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#101719',
        paper: '#FFFFFF',
        cyan: {
          DEFAULT: '#00B9CF',
          light: '#E5FBFD',
        },
        mist: '#F3F5F6',
        line: '#DDE3E5',
        text: {
          secondary: 'rgba(16, 23, 25, 0.68)',
          tertiary: 'rgba(16, 23, 25, 0.5)',
        },
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        display: ['var(--font-barlow-condensed)', 'Impact', 'sans-serif'],
      },
      animation: {
        'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
