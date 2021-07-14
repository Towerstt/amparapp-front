
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => theme('colors'),
     textColor: {
      'honeyyellow':'#ffb703',       
     },
    backgroundColor: theme => ({
      ...theme('colors'),
      'prussian': '#102e44 ',
      'honeyyellow':'#ffb703',
      
     }),
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern":
          "url('https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/fondo-home3.png')",
      }),
      height: (theme) => ({
        "screen/2": "45vh",
        
      }),
      width: {
        '1/2-screen': '50vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
