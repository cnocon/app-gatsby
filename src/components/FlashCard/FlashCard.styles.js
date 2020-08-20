// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Theme from '../Theme/Theme'

export const Card = css`
  line-height: ${Theme.fonts.sizes.lineHeights.sm};
  border: 2px solid ${Theme.colors.grays.border};
  border-radius: 4px;
  padding: 0 ${Theme.spacing.default};
  margin: 60px auto 0;
`
