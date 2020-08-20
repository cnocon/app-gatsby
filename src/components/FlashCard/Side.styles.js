// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Theme from '../Theme/Theme'

export const Side = css`
  .img-container { max-width: 100%; overflow: scroll; }
  .img-container img {
    min-width: 500px;
  }

  pre:not(.prettyprint) {
    display: inline-block;
    line-height: inherit;
    background-color: ${Theme.colors.grays.background};
    padding: 1px 6px;
    margin: 0;
  }

  pre > code span {
    font-size: 12px;
  }

  footer {
    background-color: ${Theme.colors.grays.border};
    padding: 10px 15px;
    margin: 20px -16px 0;
    padding-bottom: 10px;
    text-align: center;

    button {
      border: 0;
      background-color: ${Theme.colors.default.base};
      color: #fff;
      padding: 10px 50px;
      border-radius: 4px;
      font-weight: bold;
      font-family: ${Theme.fonts.headings.family};
    }
  }

  header {
    background-color: ${Theme.colors.grays.border};
    padding: 10px 15px;
    margin: 0 -16px 20px;

    > div {
      display: flex;
      flex-direction: row;
      flex-basis: auto;
      width: 100%;

      &.subheader {
        justify-content: space-around;
        align-items: space-between;
        text-align: center;

        > * {
          flex-basis: auto;
          width: 33.333%;
          display: flex;
          align-self: center;
          justify-content: center;

          &:first-of-type:not(h3) { justify-content: flex-start; }
          &:last-of-type:not(h3) { justify-content: flex-end; }
        }
      }
    }
  }

  p,
  .text { 
    font-size: ${Theme.fonts.sizes.default};
    line-height: ${Theme.fonts.sizes.lineHeights.default};
    color: ${Theme.colors.default.base};
  }

  .img-container-outer { text-align: center; }
  .image-note {
    @media screen and (max-width: 600px) {
      display: block;
      text-align: center;
      width: 100%;
      font-size: 12px;
    }
  }
`