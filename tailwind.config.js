/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'body-color': 'var(--body-color)',
        'main-white': 'var(--main-white)',
        'main-black': 'var(--main-black)',
        'primary-color': 'var(--primary-color)',
        'primary-color-hover': 'var(--primary-color-hover)',
        'main-slate-400': 'var(--main-slate-400)',
        'main-slate-700': 'var(--main-slate-700)',
        'main-gray': 'var(--main-gray)',
        'main-gray-400': 'var(--main-gray-400)',
        'main-gray-500': 'var(--main-gray-500)',
        'main-gray-600': 'var(--main-gray-600)',
        'main-gray-700': 'var(--main-gray-700)',
        'main-indigo-200': 'var(--main-indigo-200)',
        'main-red-500': 'var(--main-red-500)',
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
