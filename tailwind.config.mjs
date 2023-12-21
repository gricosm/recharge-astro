/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        'custom-gray': '#F4F4F4',
        'custom-teal': '#6FC3BB',
        'custom-blue': '#4DA7B1',
        'custom-green': '#67BD9A',
        'custom-dark-green': '#46A78B',
        'custom-dark': '#1F1E40',
      },
      fontFamily: {
        'suprema': ['"Suprema"', 'sans-serif'],
      },
      fontWeight: {
        'thin': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      fontSize: {
        'sm': '0.6875rem', // 11px
        'base': '1rem',      // 16px
        'lg': '1.4375rem', // 23px
        'xl': '2rem',      // 32px
        '2xl': '2.8125rem', // 45px
        '3xl': '4rem',     // 64px
        '4xl': '5.625rem', // 90px
      },
      lineHeight: {
        'extra-loose': '1.414',
      }
    },
  },
	plugins: [],
}
