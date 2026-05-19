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
        'brand': {
          'orange': '#ff6a00',
          'black': '#121212',
          'gray': '#f5f5f7',
          'dark-gray': '#1d1d1f',
          'white': '#ffffff',
        },
        'text': {
          'primary': '#1d1d1f',
          'secondary': 'rgba(29, 29, 31, 0.6)',
          'tertiary': 'rgba(29, 29, 31, 0.4)',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        'apple': '1.25rem',
      },
      animation: {
        'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
