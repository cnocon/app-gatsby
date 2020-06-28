import styled from '@emotion/styled'
import Theme from '../../../Theme/Theme'

export const IconList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0 auto;
  padding: 0;
  
  li {
    list-style-type: none;
    list-style: none;
    flex-basis: 50%;
    max-width: 50%;
    text-align: center;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    margin: ${Theme.spacing.default} 0;
    padding: 0;
  }

  i {
    flex-basis: 100%;
    font-size: ${Theme.fonts.sizes.lg};
    font-weight: 300;
    display: block;
  }

  a {
    font-size: ${Theme.fonts.sizes.default};
    font-family: ${Theme.fonts.headings.family};
    flex-basis: 100%;
    color: ${Theme.colors.default.base};

    @media screen and (min-width: ${Theme.breakpoints.min.lg}) {
      display: flex;
      flex-direction: row;
      align-items: center;

      i {
        flex-basis: 40%;
        max-width: 40%;
        display: inline-block;
      }
      
    }

    span {
      font-weight: 300;
      text-transform: uppercase;
      font-size: ${Theme.fonts.sizes.xs};
    }
    &:hover {
      span {
        text-decoration: underline;
      }

      i {
        text-decoration: none;
      }
    }
  }
`