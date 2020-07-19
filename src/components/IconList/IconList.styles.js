import styled from '@emotion/styled'
import Theme from '../Theme/Theme'

export const IconList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: ${Theme.spacing.md} auto;
  text-align: center;

  @media all and (max-width: ${Theme.breakpoints.max.md}) {
    margin: ${Theme.spacing.xxs} auto;
  }
`