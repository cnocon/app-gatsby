import styled from '@emotion/styled'
import Theme from '../Theme/Theme'

export const Item = styled.li`
  list-style: none;
  flex-basis: 33.333%;
  max-width: 33.333%;
  text-align: center;
  margin: ${Theme.spacing.default} 0;
  padding: 2rem 0;

  @media all and (min-width: ${Theme.breakpoints.min.md}) {
    padding: 0;
    flex-basis: 16.6667%;
    max-width: 16.6667%;
  }

  @media all and (max-width: ${Theme.breakpoints.max.md}) {
    margin: ${Theme.spacing.xxs} 0;
  }

  .wrap & {
    padding-left: 0;
    
    @media all and (min-width: ${Theme.breakpoints.min.md}) {
      padding: 0;
      flex-basis: 33.333%;
      max-width: 33.333%;
    }
  }
`

export const ItemLink = styled.a`
  font-size: ${Theme.fonts.sizes.sm};
  line-height: ${Theme.fonts.sizes.lineHeights.sm};
  color: ${Theme.colors.default.base};

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
  margin: 0 ${Theme.spacing.xs} ${Theme.spacing.xs};
  background-color: ${Theme.colors.grays.background};
  color: ${Theme.colors.default.base};

  .larger & {
    margin: 0 ${Theme.spacing.xs} ${Theme.spacing.sm};
  }
`

export const ItemText = styled.span`
  display: block; 
  font-weight: 400;
  margin-left: 0px;
  font-size: ${Theme.fonts.sizes.sm};
  font-family: ${Theme.fonts.accent.family};
  letter-spacing: 1px;
  line-height: ${Theme.fonts.sizes.lineHeights.sm};

  @media all and (max-width: ${Theme.breakpoints.max.sm}) {
    font-size: 1.25rem;
  }

  .larger & { 
    font-size: ${Theme.fonts.sizes.default}; 
    
    @media all and (max-width: ${Theme.breakpoints.max.sm}) {
      font-size: 1.25rem;
    }
  }
`