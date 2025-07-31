export const content = ["./src/**/*.{html,ts}"];
export const darkMode = 'class';
export const theme = {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.6s ease-in-out forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
  },
};
export const safelist = [
  'bg-red-500',
  'bg-blue-400',
  'bg-purple-500',
  'bg-green-500',
  'bg-pink-500',
  'bg-yellow-500'
];
export const plugins = [];
