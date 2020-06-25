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

  .box-shadow-purple {
    box-shadow: inset 0 -.125em 0 ${Theme.colors.accents.purple};
    padding-bottom: 1px;
  }

  .background-accent-purple {
    background: ${Theme.colors.accents.purple};
    color: #000;
    border: 1px solid ${Theme.colors.accents.purple};
  }

  .border-accent-purple {
    background-color: ${Theme.colors.accents.purple};
  }
  .border-accent-purple:hover {
    background-color: ${Theme.colors.accents.purple};
    border-color: transparent;
    color: #fff;
  }

  .box-shadow-red {
    box-shadow: inset 0 -.125em 0 ${Theme.colors.accents.red};
    padding-bottom: 1px;
  }

  .background-accent-red {
    background: ${Theme.colors.accents.red};
    color: #000;
    border: 1px solid ${Theme.colors.accents.red};
  }

    .border-accent-red:hover {
      background-color: ${Theme.colors.accents.red};
      border-color: transparent;
      color: #fff;
    }



  .box-shadow-yellow {
    box-shadow: inset 0 -.125em 0 ${Theme.colors.accents.yellow};
    padding-bottom: 1px;
  }

  .background-accent-yellow {
    background: ${Theme.colors.accents.yellow};
    color: #000;
    border: 1px solid ${Theme.colors.accents.yellow};
  }


  .border-accent-yellow:hover {
    background-color: ${Theme.colors.accents.yellow};
    border-color: transparent;
    color: ${Theme.colors.default.base};
  }

  .box-shadow-blue {
    box-shadow: inset 0 -.125em 0 ${Theme.colors.accents.blue};
    padding-bottom: 1px;
  }

  .background-accent-blue {
    background: ${Theme.colors.accents.blue};
    color: #000;
    border: 1px solid ${Theme.colors.accents.blue};
  }
  .border-accent-blue:hover {
    background-color: ${Theme.colors.accents.blue};
    border-color: transparent;
    color: #fff;
  }


  .box-shadow-green {
    box-shadow: inset 0 -.125em 0 ${Theme.colors.accents.green};
    padding-bottom: 1px;
  }

  .background-accent-green {
    background: ${Theme.colors.accents.green};
    color: #000;
    border: 1px solid ${Theme.colors.accents.green};
  }

  .border-accent-green:hover {
      background-color: ${Theme.colors.accents.green};
      border-color: ${Theme.colors.accents.green};
      color: #345;
    }
`}
