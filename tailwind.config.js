module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "index.html",
    "cew.html",
    "academic_forum.html",
    "about.html",
    "register.html",
    "submition.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        Lora: "'Lora', serif",
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Friz: "Friz Quadrata Std",
        Zen: ["Zen Antique Soft", "sans-serif"]
      },
      colors: {
        primary: "#0ea5e9",
        dark: "#1e293b",
        secondary: "#64748b",
        abu: "#7e4600",
        footer: "#162332",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),require('tailwindcss-textshadow')],
};
