/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': 'linear-gradient(272deg, #7E7FB8 0%, #9D9FE6 100%)',
      },
      boxShadow: {
        'smooth-shadow': '0px 22px 80px 0px rgba(0, 0, 0, 0.02), 0px 4.914px 24.847px 0px rgba(0, 0, 0, 0.01), 0px 1.463px 6.766px 0px rgba(0, 0, 0, 0.01)',
      },
    },
  },
  plugins: [],
}

