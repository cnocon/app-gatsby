// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Theme from '../Theme/Theme'

export const Card = css`
  line-height: ${Theme.fonts.sizes.lineHeights.sm};
  border: 3px solid ${Theme.colors.grays.border};
  border-bottom-width: 2px;

  border-radius: 4px;
  max-width: 650px;
  padding: 0 ${Theme.spacing.default};
  margin: 0 auto;
  background-color: #fff;
  -webkit-box-shadow: 0 10px 6px -6px rgba(0, 0, 0, .25);
       -moz-box-shadow: 0 10px 6px -6px rgba(0, 0, 0, .25);
            box-shadow: 0 10px 6px -6px rgba(0, 0, 0, .25);
`
