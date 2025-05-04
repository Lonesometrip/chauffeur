module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#000000', /* Pure black */
        secondary: '#aaa6c3',
        tertiary: '#0A0A0A', /* Very dark black for cards */
        'black-100': '#050505',
        'black-200': '#030303',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0 35px 120px -15px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to bottom, #000000, #000000)',
      },
    },
  },
  plugins: [],
};
