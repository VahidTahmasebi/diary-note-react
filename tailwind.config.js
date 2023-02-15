/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'primary-color-hover': 'var(--primary-color-hover)',
        'secondary-color': 'var(--secondary-color)',
        'main-white': 'var(--main-white)',
        'main-black': 'var(--main-black)',
        'main-grey': 'var(--main-grey)',
        'mein-orange': 'var(--mein-orange)',
        'body-color': 'var(--body-color)',
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
    },
  },
  plugins: [],
};
