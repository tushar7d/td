module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/*.html"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
     
     }
    
  },
  variants: {},
  plugins: [],
};
