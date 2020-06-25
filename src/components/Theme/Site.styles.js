import Theme from "../Theme/Theme"
import { css } from "@emotion/core"

const SiteStyles = css`
  font-size: 1.4rem;

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
        border: 0;

        &::before {
          color: ${Theme.colors.default.base};
          font-size: ${Theme.fonts.sizes.lg};
        }
      }

      p {
        display: table-cell;
        font-style: italic;
        font-family: ${Theme.fonts.headingsAlt.family};
        line-height: 1.5em;
        padding-left: 5.5rem;
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

    h2 {
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 25px;
      margin: 1.0em 0 0.6em 0;
      font-weight: 800;
      font-family: ${Theme.fonts.headings.family};
    }

    code {
      &:not([class^='lang-']) {
        background: ${Theme.colors.grays.background};
        padding: 2px 6px;
      }
    }

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

    img {
      border: 1px solid transparent;
      border-radius: 6px;
    }

    p {
      font-size: 18px;
      line-height: 29px;
      font-family: ${Theme.fonts.headings.family};
      margin: 22px 0;
    }

    a {
      color: ${Theme.colors.default.base};
      text-decoration: none;

      box-shadow: inset 0 -3px 0 ${Theme.colors.accents.text.yellow};
      transition: all .3s;
      padding-bottom: 1px;

      &:hover,
      &:focus,
      &:active {
        box-shadow: inset 0 -3px 0 ${Theme.colors.accents.yellow};
        ${'' /* color: ${Theme.colors.blue.base}; */}
        ${'' /* border-bottom-color: ${Theme.colors.blue.lighter}; */}
        text-decoration: none;
        outline: 0;
      }

      ul,
      ol {
        margin-left: 20px;

        li {
          font-size: ${Theme.fonts.sizes.default};
        }
      }
    }

    .sources {
      h3 {
        font-size: ${Theme.fonts.sizes.md};
      }
      p {
        font-size: ${Theme.fonts.sizes.sm};
        margin: 0 0 1rem;
        line-height: 2rem;
      }
    }

  }
`
export default SiteStyles
