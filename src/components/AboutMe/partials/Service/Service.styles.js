import styled from '@emotion/styled'
import Theme from '../../../Theme/Theme'

export const ServiceDiv = styled.div`
  text-align: center;
  padding: ${Theme.spacing.default} 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h4 {
    font-size: ${Theme.fonts.sizes.default};
    line-height: ${Theme.fonts.sizes.lineHeights.sm};
    font-family: ${Theme.fonts.accent.family};
    letter-spacing: 1px;
    font-weight: 900;
    text-transform: uppercase;
  }

  p {
    font-size: ${Theme.fonts.sizes.default};
    color: ${Theme.colors.default.base};
    margin: ${Theme.spacing.xs} 0 0;
    font-weight: 400;
  }

  &.color1,
  &.color2,
  &.color3,
  &.color4 {
    i {
      color: ${Theme.colors.default.base.darker};
      border-radius: 50%;
      box-sizing: border-box;
      display: inline-block;
      width: 74px;
      height: 74px;
      line-height: 74px;
      font-size: 35px;
      border-radius: 50%;
      text-align: center;

      @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
        width: 70px;
        height: 70px;
        line-height: 66px;
      }
    }
  }

  &.color1 {
    i {
      background: ${Theme.colors.accents.blue};
      color: ${Theme.colors.default.base} !important;
    }

    h4 span {
      box-shadow: inset 0 -5px 0 ${Theme.colors.accents.text.blue};
      padding-bottom: 2px;
    }
  }

  &.color2 {
    i {
      background: ${Theme.colors.accents.green};
      color: ${Theme.colors.default.base} !important;
    }

    h4 span {
      box-shadow: inset 0 -5px 0 ${Theme.colors.accents.text.green};
      padding-bottom: 2px;
    }
  }

  &.color3 {
    i {
      background: ${Theme.colors.accents.yellow};
      color: ${Theme.colors.default.base} !important;
    }

    h4 span {
      box-shadow: inset 0 -5px 0 ${Theme.colors.accents.text.yellow};
      padding-bottom: 2px;
    }
  }

  &.color4 {
    i {
      background: ${Theme.colors.accents.red};
      color: ${Theme.colors.default.base} !important;
    }

    h4 span {
      box-shadow: inset 0 -5px 0 ${Theme.colors.accents.text.red};
      padding-bottom: 2px;
    }
  }
}
`

