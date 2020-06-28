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

export const List = css`
  list-style-type: none;
`
