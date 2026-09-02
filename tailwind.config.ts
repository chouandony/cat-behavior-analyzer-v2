import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFBF5',
        warm: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#E86A33',
          600: '#D45A2A',
          700: '#B84A23',
        },
        forest: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#2D5A3D',
          600: '#225230',
          700: '#1A4026',
        },
        earth: {
          100: '#F5F0E8',
          200: '#E8E0D0',
          300: '#D4C9B0',
          400: '#A89880',
          500: '#8B7D6B',
        },
        cat: {
          50: '#FFF5F0',
          100: '#FFE8D8',
          200: '#FFD0B0',
          300: '#FFA878',
          400: '#FF8A50',
          500: '#E86A33',
          600: '#C45628',
          700: '#9A4420',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
