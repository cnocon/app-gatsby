import styled from '@emotion/styled'
import Theme from '../Theme/Theme'
import { css } from '@emotion/core'

export const Container = styled.div`
  .row {
    padding-top: 2rem;
    padding-bottom: 2rem;
    justify-content: center;
    display: flex;
  }

  h2 + .row {
    padding-top: 0;
  }

  .col-md-4 {
    @media screen and (min-width: ${Theme.breakpoints.min.md}) {
      flex: 0 0 31.333333%;
      max-width: 31.333333%;
      flex-basis: 31.333333%;
      flex-grow: 0;
      margin: 0 1%;
    }
  }
`

export const List = css`
  list-style-type: none;
`
