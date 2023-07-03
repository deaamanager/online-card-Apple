/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)"
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d",
    } ,
    ".prespective":{
     perspective:"1000px"
    },
    ".backface-hiiden":{
      backfaceVisibility :"hidden",
      
    }
  })
}) 

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [Myclass],
}
