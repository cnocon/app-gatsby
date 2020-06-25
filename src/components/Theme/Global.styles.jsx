import { css } from '@emotion/core'
import Theme from './Theme'

export default {styles: css`
  html {
    font-size: 10px !important;
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
    font-size: 10px;
    margin: 0;
  }

  main {
    height: 100%;
    display: block;
    padding: 2rem 0;
    font-size: 10px;
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

  code {
    &:not([class^='lang-']) {
      background: ${Theme.colors.grays.background};
      padding: 2px 6px;
    }
  }

  h2 {
    font-family: ${Theme.fonts.body.family};
    font-weight: 800;
    font-family: Oswald;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 4rem 0 0;
    font-size: ${Theme.fonts.sizes.md};

    i {
      font-size: 16px;
      margin-right: 14px;
      line-height: 39px;
      text-align: center;
      color: ${Theme.colors.grays.text} !important;
      background-color: #fff;
      border-radius: 50%;
      border: 4px solid ${Theme.colors.grays.border};
      display: inline-block;
      width: 47px;

      &:before {
        display: inline;
        margin-left: 0;
        margin-right: 0;
      }
    }
	}

  img {
    border: 1px solid transparent;
    border-radius: 6px;
  }

  p {
    ${'' /* margin: 1.2em 0;
    font-size: 1.6rem;
    line-height: 3rem; */}
    font-size: 18px;
    line-height: 29px;
    font-family: ${Theme.fonts.headings.family};
    margin: 22px 0;
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

  .sources {
    p {
      font-size: 14px;
      margin: 0 0 1rem;
      line-height: 2rem;
    }
  }

  .box-shadow-purple {
    box-shadow: inset 0 -3px 0 ${Theme.colors.accents.purple};
    padding-bottom: 1px;
  }

  .border-accent-purple {
    background-color: ${Theme.colors.accents.purple};

    &:hover {
      background-color: ${Theme.colors.accents.purple};
      border-color: transparent;
      color: #fff;
    }

  }

  .box-shadow-yellow {
    box-shadow: inset 0 -3px 0 ${Theme.colors.accents.yellow};
    padding-bottom: 1px;
  }

  .border-accent-yellow {
    background-color: ${Theme.colors.accents.yellow};
    ${'' /* border: 2px solid ${Theme.colors.grays.borderDark}; */}

    &:hover {
      background-color: ${Theme.colors.accents.yellow};
      border-color: transparent;
      color: ${Theme.colors.default.base};
    }
  }

  .box-shadow-blue {
    box-shadow: inset 0 -3px 0 ${Theme.colors.accents.blue};
    padding-bottom: 1px;
  }

  .border-accent-blue {
    background-color: ${Theme.colors.accents.blue};
    ${'' /* border: 2px solid ${Theme.colors.grays.borderDark}; */}

    &:hover {
      background-color: ${Theme.colors.accents.blue};
      border-color: transparent;
      color: #fff;
    }
  }

  .box-shadow-green {
    box-shadow: inset 0 -3px 0 ${Theme.colors.accents.green};
    padding-bottom: 1px;
  }

  .border-accent-green {
    background-color: ${Theme.colors.accents.green};
    ${'' /* border: 2px solid ${Theme.colors.grays.borderDark}; */}

    &:hover {
      background-color: ${Theme.colors.accents.green};
      border-color: transparent;
      color: #fff;
    }
  }
`}
