module.exports = {
  content: ["./public/**/*.{html,js}", "index.html","cew.html","academic_forum","about.html","register.html","submition.html"],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily:{
        Lora: "'Lora', serif",
        Roboto: ['Roboto', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        adelia: ["ADELIA", "serif"],
      },
      colors: {
        primary: '#0ea5e9',
        dark: '#1e293b',
        secondary: '#64748b',
        abu: '#7e4600',
        footer: '#1c2f41',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
