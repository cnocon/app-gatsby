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
      base: '#faf66b',
      darker: 'hsla(58, 100%, 46%, 1)',
      alt: '#fdd770',
      lighter: '#fffc99',
      lightest: '#fffcb3',
    },
    grays: {
      background: '#f7f7f7',
      border: '#f4f6f7',
      borderLight: '#F9F9F9',
      borderDark: '#e7e8e9',
      borderMedium: `#dde4e6`,
      textLight: `#c7d7db`,
      textDark: `hsl(194, 10%, 70%)`,
      textDarker: `#BFC5CD`,
      text: `#d5dbdd`,
      boxShadow: `hsl(210, 10%, 60%)`
    },
    accents: {
      red: 'hsl(355, 100%, 92%)',
      green: 'hsl(175, 100%, 85%)',
      blue: 'hsl(197,100%,86%)',
      yellow: 'hsl(58, 100%, 65%)',
      purple: 'hsl(240, 100%, 92%)',
      darker: {
        purple: 'hsl(240, 100%, 80%)',
      },
      background: {
        yellow: 'hsl(58, 100%, 86%)',
        green: 'hsl(175, 100%, 91%)',
        blue: 'hsl(197, 100%, 90%)',
        purple: 'hsl(240, 100%, 96%)',
        red: 'hsl(355, 100%, 95%)',
      },
      text: {
        red: 'hsl(355, 81%, 80%)',
        green: 'hsl(175, 70%, 62%)',
        blue: 'hsl(197, 80%, 65%)',
        yellow: 'hsl(58, 100%, 48%)',
        purple: 'hsl(240, 80%, 75%)'
      }
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
        xs: `1em`,
        sm: `1.3em`,
        default: `1.5em`,
        md: `1.7em`,
        lg: `1.85em`
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
      lg: `95%`,
      lgMax: `110rem`,
      full: `100%`,
      fullMax: `none`
    }
  },
  breakpoints: {
    max: {
      xs: `462px`,
      sm: `641px`,
      md: `768px`,
      lg: `960px`,
      xl: `1024px`
    },
    min: {
      xs: `463px`,
      sm: `642px`,
      md: `769px`,
      lg: `961px`,
      xl: `1025px`
    }
  },
}
