/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding: '16px', 

    },
    extend: {
      colors: {
        warnakecil: '#27272a',
        warnabesar: '#4f46e5',
        warnabackground: '#cbd5e1',
        warnahtml: '#dc2626',
        warnasiswa: '#075985',
        gelap: '#020617',
        warnatransisi: '#6366f1',
        warnaklik: '#a5b4fc'

      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

