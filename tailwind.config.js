module.exports = {
  content: ["./index.html",
  "./src/**/*.jsx",],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway']
      },
      colors: {
        't-white': 'rgba(255, 255, 255, 0.5)'
      },
      backgroundImage: {
        'image': "url('./src/images/clouds.jpg')"
      }
    },
  },
  plugins: [],
}
