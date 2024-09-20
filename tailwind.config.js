/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      'sans': ['Rubik', 'sans-serif'],
    },
    fontSize: {
      'sm': ['14px', '18px'],
      'base': ['18px', '28px'],
      'lg': ['22px', '30px'],
      'xl': ['30px', '36px'],
      '2xl': ['36px', '40px'],
      '3xl': ['40px', '42px'],
    },
    colors: {
      red: 'hsl(348, 100%, 68%)',
      orange: 'hsl(15, 100%, 70%)',
      yellow: 'hsl(43, 84%, 65%)',
      green: 'hsl(145, 58%, 55%)',
      'blue-50': 'hsl(195, 74%, 62%)',
      'blue-100': 'hsl(236, 100%, 87%)',
      'blue-200': 'hsl(235, 45%, 61%)',
      'blue-300': 'hsl(246, 80%, 60%)',
      'blue-400': 'hsl(235, 46%, 20%)',
      'blue-500': 'hsl(226, 43%, 10%)',
      violet: 'hsl(264, 64%, 52%)',
      black: 'hsl(0, 0%, 0%)',
      white: 'hsl(100,100%,100%)',
    }
  },
}

