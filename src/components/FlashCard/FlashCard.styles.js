// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Theme from '../Theme/Theme'

export const Card = css`
  line-height: ${Theme.fonts.sizes.lineHeights.sm};
  border: 3px solid ${Theme.colors.grays.border};
  border-radius: 3px;
  padding: ${Theme.spacing.default} ${Theme.spacing.default} 0;
  margin: 60px auto 0;
  max-width: 600px;

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
    border-top: 2px solid ${Theme.colors.grays.border};
    background-color: ${Theme.colors.grays.border};
    padding: 10px 15px;
    margin: 20px -16px 0;
  }
`
