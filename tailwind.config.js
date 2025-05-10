/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'hsl(var(--background))',
          light: '#ffffff',
          dark: '#0a0a0a'
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
          light: '#1a1a1a',
          dark: '#ffffff'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          light: '#8B5CF6',
          dark: '#A78BFA'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          light: '#4B5563',
          dark: '#9CA3AF'
        },
        accent: {
          DEFAULT: '#F43F5E',
          foreground: '#FFFFFF',
        },
        card: {
          DEFAULT: '#0F0F0F',
          foreground: '#FAFAFA',
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
          light: '#E5E7EB',
          dark: '#1F2937'
        },
        muted: {
          DEFAULT: '#171717',
          foreground: '#A3A3A3',
        },
      },
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, #1F1F1F 1px, transparent 1px), linear-gradient(to bottom, #1F1F1F 1px, transparent 1px)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};