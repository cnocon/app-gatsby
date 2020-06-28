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
    margin-top: 1rem;
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
      border-radius: 50%;
      box-sizing: border-box;
      display: inline-block;
      width: 74px;
      height: 74px;
      line-height: 66px;
      font-size: 35px;
      border-radius: 50%;
      text-align: center;

      @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
        width: 70px;
        height: 70px;
        line-height: 66px;
      }

      &::before {
        color: #345;
      }
    }
  }

  &.color1 {
    i {
      line-height: 74px;
      background-color: #fff;

      &::before {
        text-shadow: 1px 1px 1px ${Theme.colors.accents.text.blue};
      }
    }

    h4 span {
      box-shadow: inset 0 -3px 0 ${Theme.colors.accents.blue};
      padding-bottom: 2px;
    }
  }

  &.color2 {
    i {
      line-height: 74px;
      background-color: #fff;

      &::before {
        text-shadow: 1px 1px 1px ${Theme.colors.accents.text.green};
      }
    }

    h4 span {
      box-shadow: inset 0 -3px 0 ${Theme.colors.accents.green};
      padding-bottom: 2px;
    }
  }

  &.color3 {
    i {
      line-height: 74px;
      background-color: #fff;

      &::before {
        text-shadow: 1px 1px 1px ${Theme.colors.accents.text.yellow};
      }
    }

    h4 span {
      box-shadow: inset 0 -3px 0 ${Theme.colors.accents.yellow};
      padding-bottom: 2px;
    }
  }

  &.color4 {
    i {
      line-height: 74px;
      background-color: #fff;

      &::before {
        text-shadow: 1px 1px 1px ${Theme.colors.accents.text.red};
      }
    }

    h4 span {
      box-shadow: inset 0 -3px 0 ${Theme.colors.accents.red};
      padding-bottom: 2px;
    }
  }
}
`

