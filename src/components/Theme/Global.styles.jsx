import { css } from '@emotion/core'
import Theme from './Theme'

export default {styles: css`
  html {
    font-size: 10px !important;
    box-sizing: border-box;
  }

  body {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${Theme.fonts.body.family};
  }

  .entry-content {
    blockquote {
    position: relative;
    display: table;
    margin: 0 0 0 -1.5rem;
    padding: 2rem 5rem;

    &:before {
      display: none;
    }

    i {
      position: absolute;
      display: table-cell;
    }

    p {
      display: table-cell;
      font-style: italic;
      font-family: ${Theme.fonts.headingsAlt.family};
      line-height: 1.5em;
      padding-left: 3rem;
      font-size: 2.25rem;
    }

    cite {
      display: block;
      font-size: 14px;
      letter-spacing: .04em;
      text-align: right;
      padding-right: 1em;
      margin-top: 12px;
      font-style: normal;
      font-weight: 400;
      color: ${Theme.colors.grays.text};

      &:before {
        content: "–";
        font-family: ${Theme.fonts.headingsAlt.family};
      }
    }
  }

  p {
    margin: 1.2em 0;
    font-size: 1.6rem;
    line-height: 3rem;
  }

  a {
    color: ${Theme.colors.blue.darker};
    text-decoration: none;
    border-bottom: 1px solid ${Theme.colors.blue.darker};
    transition: color .3s;

    &:hover,
    &:focus,
    &:active {
      color: ${Theme.colors.blue.base};
      border-bottom-color: ${Theme.colors.blue.lighter};
      text-decoration: none;
      outline: 0;
    }
  }
`}
