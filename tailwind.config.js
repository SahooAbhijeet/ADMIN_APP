module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F8F8F8",
        secondary: "#62AB45",
        tertiary: "#ABD960",
        grey: "#F1F1F1",
        darkGrey:'#858585'
      },

      fontFamily: {
        poppins: ['Poppins'],
        montserrat: ['Montserrat'],
        inter: ['Inter']
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
}