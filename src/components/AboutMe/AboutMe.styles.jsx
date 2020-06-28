import styled from '@emotion/styled'
import Theme from '../Theme/Theme'
import { css } from '@emotion/core'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .section-title {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  h2 {
    text-align: left;
    font-weight: 700;
    font-size: ${Theme.fonts.sizes.xs};
  }
`

export const Tweet = css`
  margin: 0 0 0 15% !important;

  @media all and (min-width: ${Theme.breakpoints.min.md}) {
    margin: 0 auto !important;
  }
`

export const HalfColumn = styled.div`
  &:first-of-type {
    @media all and (max-width: ${Theme.breakpoints.min.md}) {
      margin-bottom: ${Theme.spacing.xl};
    }
  }
`

export const List = css`
  list-style-type: none;
`
