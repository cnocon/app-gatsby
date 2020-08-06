// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Theme from "../Theme/Theme"

export const PortfolioItem = css`
  padding-bottom: 3rem;
  padding-top: 3rem;
  border-bottom: 1px solid ${Theme.colors.grays.borderMedium};

  &:last-of-type {
    border-bottom: 0;
  }

  img {
    border: 3px solid ${Theme.colors.grays.border};
    max-width: 300px;
    margin-right: auto;
  }

  a {
    text-decoration: underline;
    color: ${Theme.colors.default.base};
    font-family: ${Theme.fonts.accent.family};

    &:hover {
      text-decoration: none;
    }
  }

  h4 {
    font-size: ${Theme.fonts.sizes.sm};
    line-height: ${Theme.fonts.sizes.lineHeights.sm};
    font-family: ${Theme.fonts.headings.family};
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: ${Theme.fonts.sizes.lineHeights.default};
    
    a {
      font-family: ${Theme.fonts.body.family};
      letter-spacing: unset;
      font-weight: 400;
      text-transform: none;
      text-decoration: underline;
    }
  }
`