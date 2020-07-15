import styled from '@emotion/styled'
import Theme from '../Theme/Theme'

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

  a {
    font-size: ${Theme.fonts.sizes.sm};
    font-family: ${Theme.fonts.body.family};
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${Theme.colors.default.base};

    i {
      flex-basis: 100%;
      font-size: ${Theme.fonts.sizes.lg};
      font-weight: 300;
      display: block;
      margin-bottom: ${Theme.spacing.sm};
      color: ${Theme.colors.default.base};
      width: 50px;
      height: 50px; 
      border: 1px solid transparent;
      padding: 10px;
      border-radius: 50%;
      background-color: ${Theme.colors.default.base};
      
      @media screen and (min-width: ${Theme.breakpoints.min.xl}) {
        flex-basis: 40%;
        max-width: 40%;
        display: inline-block;
      }

      &.fa-codepen {
        color: ${Theme.colors.accents.background.yellow};
      }

      &.fa-twitter {
        color: ${Theme.colors.accents.blue};
      }

      &.fa-linkedin-in {
        color: ${Theme.colors.accents.green};
      }

      &.fa-github {
        color: ${Theme.colors.accents.purple};
      }
    }

    span {
      display: inline-block;
      font-weight: 400;
      font-size: ${Theme.fonts.sizes.default};
      font-family: ${Theme.fonts.headings.family};
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