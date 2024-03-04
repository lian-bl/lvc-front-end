/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    //Remove Tailwind CSS's preflight style. so it can use the antd's preflight instead (reset.css).
    preflight: false,
  },
};
