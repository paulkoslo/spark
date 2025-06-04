import type { Config } from 'tailwindcss'

// Tailwind configuration with brand colour and dark mode
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#6366f1'
        }
      }
    }
  },
  plugins: []
} satisfies Config
