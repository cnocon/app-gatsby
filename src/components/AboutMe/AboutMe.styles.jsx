import styled from '@emotion/styled'
// import Theme from '../Theme/Theme'
import { css } from '@emotion/core'

export const Container = styled.div`
  .row {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  h2 + .row {
    padding-top: 0;
  }
`

export const List = css`
  list-style-type: none;
`
