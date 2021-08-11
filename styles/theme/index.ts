
function createTheme(obj: any){}

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1025,
      xl: 1200,
    },
  },

  typography: {
    fontFamily: ['Sofia Pro'].join(','),
    // fontFamily: 'Raleway, sans-serif',
    // fontFamily: 'Raleway, sans-serif',



    h1: {
      fontFamily: 'Poppins Black',
      fontWeight: 'bolder',
      lineHeight: '1.27'
      // fontSize: '3.3rem',
    },

    body1: {
      fontSize: '1.2rem',
      fontWeight: 300,
    },
  },

  spacing: 10,

  palette: {

  },
})

export default {}
