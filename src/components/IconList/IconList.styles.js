import styled from '@emotion/styled'
import Theme from '../Theme/Theme'

export const IconList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin:  0 auto;
  text-align: center;
  margin: 2rem 0;
  
  li {
    list-style-type: none;
    list-style: none;
    flex-basis: 33%;
    max-width: 33%;
    text-align: center;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    margin: ${Theme.spacing.default} 0;
    padding: 2rem 0;
    flex-direction: row;
    justify-content: center;

    @media all and (min-width: ${Theme.breakpoints.min.md}) {
      padding: 0;
      flex-basis: 20%;
      max-width: 20%;
    }
  }

  a {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    font-size: ${Theme.fonts.sizes.sm};
    line-height: ${Theme.fonts.sizes.lineHeights.default};
    color: ${Theme.colors.default.base};
    font-family: ${Theme.fonts.headings.family};
    
    &:hover {
      text-decoration: none;

      i {
        text-decoration: none;
        background-color: ${Theme.colors.default.base};
        color: #fff;
        
      }

      > span { 
        color: #345;
        text-decoration: none;
      }
    }

    > span {
      display: block; 
      font-weight: 400;
      margin-left: 0px;
      font-size: 14px;
      font-family: ${Theme.fonts.headings.family};
      letter-spacing: 1px;
      // text-transform: uppercase;
      // color: ${Theme.colors.grays.textDark};
    }
    
    i {
      flex-basis: 32px;
      max-width: 32px;
      width: 32px;
      height: 32px;
      line-height: 32px;
      vertical-align: middle;
      font-size: 18px;
      border-radius: 50%;
      border-width: 0;
      box-sizing: border-box;
      margin: 0 ${Theme.spacing.xs} 1rem 0;
      background-color: ${Theme.colors.grays.background};
    }
  }
`