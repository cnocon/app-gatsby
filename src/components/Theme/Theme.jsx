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
      lightest: '#D7F1FF',
      boxShadow: 'rgba(118,215,254,.35)'
    },
    yellow: {
      base: 'hsl(58, 94%, 70%)',
      darker: 'hsl(58,100%,46%)',
      alt: '#fdd770',
      lighter: 'hsl(58, 100%, 80%)',
      lightest: 'hsl(58, 100%,85%)',
    },
    grays: {
      border: '#f4f6f7',
      borderLight: '#F9F9F9',
      textLight: `#DDE4E6`,
      text: `hsl(193, 10%, 66%)`
    },
    accents: {
      red: 'hsl(1, 100%, 70%)',
      green: '#5BCF80',
      blue: 'hsla(197,92%,68%,1)',
      yellow: '#fdd770',
    }
  },
  fonts: {
    body: {
      family: 'Roboto, sans-serif',
      weights: {
        light: `300`,
        lightItalic: `300i`,
        normal: `400`,
        medium: `500`,
        bold: `700`,
        black: `900`
      }
    },
    headings: {
      family: 'Lato, sans-serif',
      weights: {
        light: `300`,
        normal: `400`,
        bold: `700`,
        black: `900`
      }
    },
    headingsAlt: {
      family: 'Arial, Helvetica, sans-serif',
      weights: {
        normal: `400`,
        bold: `700`
      }
    },
    accent: {
      family: 'Oswald',
      weights: {
        normal: `400`,
        light: `200`,
        bold: `700`
      }
    },
    sizes: {
      xxs: '.75rem',
      xs: '1.2rem',
      sm: '1.4rem',
      default: '1.6rem',
      md: '2.25rem',
      lg: '3rem',
      xl: '3.6rem',
      xxl: '4.5rem',
      lineHeights: {
        sm: `1.35em`,
        default: `1.5em`,
        md: `1.75em`,
        lg: `2em`
      },
    },
  },
  spacing: {
    xxl: `6rem`,
    xl: `4.5rem`,
    lg: `3rem`,
    default: `1.6rem`,
    md: `2rem`,
    sm: `1rem`,
    xs: `.5rem`
  },
  layout: {
    widths: {
      default: `90%`,
      defaultMax: `96rem`,
      full: `100%`,
      fullMax: `none`
    }
  },
  breakpoints: {
    xs: `46.2rem`,
    sm: `64.1rem`,
    md: `76.8rem`,
    lg: `96rem`
  },
}
