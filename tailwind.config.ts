import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#1e3a8a',
          100: '#1e40af',
          200: '#1e3a8a',
          300: '#1e3a8a',
          400: '#1e40af',
          500: '#1e3a8a',
          600: '#1e40af',
          700: '#1e3a8a',
          800: '#1e3a8a',
          900: '#0f172a',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
}
export default config


