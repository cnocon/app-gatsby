module.exports = {
  colors: {
    default: {
      base: 'hsl(210, 25%, 27%)',
      darker: 'hsl(210, 40%, 10%)',
      lighter: 'hsl(210, 25%, 60%)'
    },
    blue: {
      base: 'hsla(197,92%,68%,1)',
      darker: 'hsla(197, 100%, 56%,1)',
      lighter: 'hsla(198, 100%, 91%, 1)',
      lightest: '#D7F1FF'
    },
    yellow: {
      base: 'hsl(58, 94%, 70%)',
      darker: 'hsl(58, 100%, 45%)',
      alt: '#fdd770',
      lighter: 'hsl(58, 100%, 80%)'
    },
    grays: {
      border: '#f4f6f7',
      borderLight: '#F9F9F9',
      text: '#d0dadc',
      background: 'whitesmoke'
    }
  },
  fonts: {
    body: {
      family: 'Roboto, sans-serif',
      weights: {
        normal: 400,
        bold: 700
      }
    },
    headings: {
      family: 'Lato, sans-serif',
      weights: {
        normal: 400
      }
    },
    headingsAlt: {
      family: 'Arial, Helvetica, sans-serif',
      weights: {
        normal: 400,
        bold: 700
      }
    },
    accent: {
      family: 'Oswald',
      weights: {
        normal: 400
      }
    },
    sizes: {
      xs: '1.2rem',
      sm: '1.4rem',
      default: '1.6rem',
      lg: '3.6rem',
      xl: '4.5rem'
    }
  },
  spacing: {
    xl: '4.5rem',
    lg: '3rem',
    default: '2rem',
    sm: '1rem',
    xs: '.5rem'
  },
  layout: {
    widths: {
      full: '90%',
      fullMax: '96rem'
    }
  },
  breakpoints: {
    sm: `64.1rem`,
    md: `76rem`,
  },
}
