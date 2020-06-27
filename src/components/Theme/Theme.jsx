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
      darker: '#ebe30',
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
      textDark: `#a0adb1`,
      text: `#bfc5cd`
    },
    accents: {
      red: 'hsl(1,100%,94%)',
      green: 'hsl(139, 70%, 86%)',
      blue: 'hsl(197,100%,89%)',
      yellow: 'hsl(58, 100%, 86%)',
      purple: 'hsl(240, 100%, 94%)',
      text: {
        red: 'hsl(1,77%,82%)',
        purple: 'hsl(240, 100%, 85%)',
        green: 'hsl(139,50%,75%)',
        yellow: 'hsl(58, 94%, 70%)',
        blue: 'hsl(197,85%,75%)'
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
        sm: `1.35em`,
        default: `1.5em`,
        md: `1.7em`,
        lg: `1.9em`
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
    max: {
      xs: `462px`,
      sm: `641px`,
      md: `768px`,
      lg: `960px`
    },
    min: {
      xs: `463px`,
      sm: `642px`,
      md: `769px`,
      lg: `961px`
    }
  },
}
