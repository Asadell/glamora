/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '1.25rem',
        lg: '5rem',
      },
    },
    extend: {
      fontFamily: {
        'plus-jakarta-sans': ["Plus Jakarta Sans","sans-serif"],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(272deg, #7E7FB8 0%, #9D9FE6 100%)',
      },
      boxShadow: {
        'smooth-shadow': '0px 22px 80px 0px rgba(0, 0, 0, 0.02), 0px 4.914px 24.847px 0px rgba(0, 0, 0, 0.01), 0px 1.463px 6.766px 0px rgba(0, 0, 0, 0.01)',
      },
      colors: {
        lavenderHue: '#EBECFA',
        deepSlate: '#3F405C',
        softIndigo: '#C4C5F0',
        lightPeriwinkle: '#9D9FE6',
        coolIndigo: '#7E7FB8',
        lightIndigo: '#8586C3',
        paleIndigo: '#D8D9F5',
        dustyRose: '#DF8585',
        softRose: '#E79595',
        paleRose: '#F5CACA',
        charcoalGray: '#30303D',
        slateStorm: '#5F6265',
        midnightBlack: '#131414',
        deepTeal: '#042327',
      },
    },
  },
  plugins: [],
}

