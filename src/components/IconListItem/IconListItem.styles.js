import styled from '@emotion/styled'
import Theme from '../Theme/Theme'

export const Item = styled.li`
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

  @media all and (max-width: ${Theme.breakpoints.max.md}) {
    margin: ${Theme.spacing.xxs} 0;
  }
`

export const ItemLink = styled.a`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  font-size: ${Theme.fonts.sizes.sm};
  line-height: ${Theme.fonts.sizes.lineHeights.default};
  color: ${Theme.colors.default.base};
  font-family: ${Theme.fonts.headings.family};

  &:hover {
    text-decoration: none;
  }

  &:hover i {
    text-decoration: none;
    background-color: ${Theme.colors.default.base};
    color: transparent;
  }

  &:hover span { 
    color: #345;
    text-decoration: none;
  }
`
export const ItemIcon = styled.i`
  flex-basis: 32px;
  max-width: 32px;
  width: 32px;
  height: 32px;
  line-height: 32px !important;
  vertical-align: middle;
  font-size: 18px;
  border-radius: 50%;
  border-width: 0;
  box-sizing: border-box;
  margin: 0 ${Theme.spacing.xs} 1rem 0;
  background-color: ${Theme.colors.grays.background};
  color: #345;
`
export const ItemText = styled.span`
  display: block; 
  font-weight: 400;
  margin-left: 0px;
  font-size: 14px;
  font-family: ${Theme.fonts.headings.family};
  letter-spacing: 1px;
`