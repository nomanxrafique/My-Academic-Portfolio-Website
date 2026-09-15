import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Restrained academic palette. Navy is the institutional anchor,
        // slate carries body text, and a single blue accent is used sparingly.
        navy: {
          50: '#f2f5f9',
          100: '#e2e9f2',
          200: '#c7d5e7',
          300: '#9fb7d4',
          400: '#7093bd',
          500: '#4f74a5',
          600: '#3d5c89',
          700: '#334b6f',
          800: '#2d405d',
          900: '#1b2942',
          950: '#111b2e',
        },
        accent: {
          DEFAULT: '#1d6fb8',
          light: '#3b8fd4',
          dark: '#61a9e0',
        },
      },
      maxWidth: {
        content: '72rem',
        prose: '68ch',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
