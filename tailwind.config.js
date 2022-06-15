module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({addVariant}) {
      addVariant ('child', '& > *');
      addVariant ('child-hover', '& > *:hover');
    },
    require ('tailwind-scrollbar'),
  ],
};