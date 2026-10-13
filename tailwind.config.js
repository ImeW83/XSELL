/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        ink: '#0d0d10',
        body: '#6b7280',
        line: '#e3edf9',
        'hero-start': '#0A3D7A',
        'hero-end': '#061226',
        'brand-blue': '#0E7FE1',
        'accent-blue': '#0B6FC9',
        'brand-green': '#22A454',
      },
    },
  },
  plugins: [],
};
