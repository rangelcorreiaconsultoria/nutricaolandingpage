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
        canvas: '#101719',
        surface: '#172125',
        raise: '#1E2B30',
        deep: '#0B1113',
        fg: '#FFFFFF',
        cyan: {
          DEFAULT: '#00B9CF',
          light: '#E5FBFD',
        },
        line: 'rgba(255, 255, 255, 0.14)',
        text: {
          secondary: 'rgba(255, 255, 255, 0.74)',
          tertiary: 'rgba(255, 255, 255, 0.58)',
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
