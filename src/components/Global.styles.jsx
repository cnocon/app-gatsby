import { css } from '@emotion/core'
import Theme from './Theme/Theme'

export default {styles: css`
  html {
    font-size: 10px;
    overflow-x: hidden;
    max-width: 100%;
    box-sizing: border-box;
  }

  body {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${Theme.fonts.body.family};
    height: 100%;
    max-width: 100%;
    overflow-x: hidden;
    margin: 0;
  }

  main {
    height: 100%;
    display: block;
    padding: 2rem 0;
  }

  .wrapper-outer {
    padding: ${Theme.spacing.xs} ${Theme.spacing.default} ${Theme.spacing.xl};
    font-size: 1.4rem;
  }

  /* COLOR HELPER CLASSES */
  .text-shadow-purple {
    text-shadow: 0 1px 1px ${Theme.colors.accents.text.purple};
    color: #345;
  }

  .text-shadow-red {
    text-shadow: 0 1px 1px ${Theme.colors.accents.text.red};
    color: #345;
  }

  .text-shadow-yellow {
    text-shadow: 0 1px 1px ${Theme.colors.accents.text.yellow};
    color: #345;
  }

  .text-shadow-blue {
    text-shadow: 0 1px 1px ${Theme.colors.accents.text.blue};
    color: #345;
  }
  
  .text-shadow-green {
    text-shadow: 0 1px 1px ${Theme.colors.accents.text.green};
    color: #345;
  }

  .box-shadow-purple {
    padding-bottom: 1px;
    box-shadow: 0 2px 0 ${Theme.colors.accents.purple};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 2px 0 ${Theme.colors.accents.text.purple};
    }
  }

  .box-shadow-red {
    padding-bottom: 1px;
    box-shadow: 0 2px 0 ${Theme.colors.accents.red};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 2px 0 ${Theme.colors.accents.text.red};
    }
  }

  .box-shadow-yellow {
    padding-bottom: 1px;
    box-shadow: 0 2px 0 ${Theme.colors.accents.yellow};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 2px 0 ${Theme.colors.accents.text.yellow};
    }
  }

  .box-shadow-blue {
    padding-bottom: 1px;
    box-shadow: 0 2px 0 ${Theme.colors.accents.blue};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 2px 0 ${Theme.colors.accents.text.blue};
    }
  }
  
  .box-shadow-green {
    padding-bottom: 1px;
    box-shadow: 0 2px 0 ${Theme.colors.accents.green};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 2px 0 ${Theme.colors.accents.text.green};
    }
  }

  .background-accent-purple {
    background: ${Theme.colors.accents.purple};
    color: #000;
    border: 1px solid ${Theme.colors.accents.purple};
  }
  
  .background-accent-red {
    background: ${Theme.colors.accents.red};
    color: #000;
    border: 1px solid ${Theme.colors.accents.red};
  }

  .background-accent-yellow {
    background: ${Theme.colors.accents.yellow};
    color: #000;
    border: 1px solid ${Theme.colors.accents.yellow};
  }

  .background-accent-blue {
    background: ${Theme.colors.accents.blue};
    color: #000;
    border: 1px solid ${Theme.colors.accents.blue};
  }

  .background-accent-green {
    background: ${Theme.colors.accents.green};
    color: #000;
    border: 1px solid ${Theme.colors.accents.green};
  }

  .border-accent-purple {
    border: 2px solid ${Theme.colors.accents.purple};
    padding: 1px 2px;
    border-radius: 4px;
    
    &:hover {
      border: 2px solid ${Theme.colors.accents.text.purple};
    }
  }
  
  .border-accent-red {
    border: 2px solid ${Theme.colors.accents.red};
    padding: 1px 2px;
    border-radius: 4px;
    
    &:hover {
      border: 2px solid ${Theme.colors.accents.text.red};
    }
  }
    
  .border-accent-yellow {
    border: 2px solid ${Theme.colors.accents.yellow};
    padding: 1px 2px;
    border-radius: 4px;
    
    &:hover {
      border: 2px solid ${Theme.colors.accents.text.yellow};
    }
  }

  .border-accent-blue {
    border: 2px solid ${Theme.colors.accents.blue};
    padding: 1px 2px;
    border-radius: 4px;
    
    &:hover {
      border: 2px solid ${Theme.colors.accents.text.blue};
    }
  }

  .border-accent-green {
    border: 2px solid ${Theme.colors.accents.green};
    padding: 1px 2px;
    border-radius: 4px;
    
    &:hover {
      border: 2px solid ${Theme.colors.accents.text.green};
    }
  }
`}
