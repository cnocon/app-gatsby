import { css } from '@emotion/core'
import SiteTheme from './SiteTheme'

export default {styles: css`
  html {
    font-size: 10px !important;
    box-sizing: border-box;
  }

  body {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${SiteTheme.fonts.body.family};
  }
`}
