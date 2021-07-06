
module.exports = {
  
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern":
          "url('../public/images/vivasnosqueremosopacity.jpg')",
      }),
      height: (theme) => ({
        "screen/2": "45vh",
        
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
