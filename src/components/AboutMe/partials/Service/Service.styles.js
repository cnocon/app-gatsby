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
    font-size: ${Theme.fonts.sizes.sm};
    line-height: ${Theme.fonts.sizes.lineHeights.sm};
    font-family: ${Theme.fonts.accent.family};
    letter-spacing: 1px;
    font-weight: 900;
    text-transform: uppercase;
    margin-top: 1rem;

    span {
      padding-bottom: 1px;
    }
  }

  p {
    font-size: ${Theme.fonts.sizes.sm};
    color: ${Theme.colors.default.base};
    margin: ${Theme.spacing.xs} 0 0;
    font-weight: 400;
  }

  &.color1,
  &.color2,
  &.color3,
  &.color4 {
    i {
      box-sizing: border-box;
      display: inline-block;
      width: 66px;
      height: 66px;
      line-height: 66px;
      font-size: 35px;
      text-align: center;
      background-color: #fff;

      @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
        width: 60px;
        height: 60px;
        line-height: 60px;
      }

      &::before {
        color: #345;
        font-weight: 200;
      }
    }
  }

  &.color1 {
    i {
      &::before {
        text-shadow: 1px 2px 2px ${Theme.colors.accents.green};
      }
    }

    h4 span {
      box-shadow: inset 0 -2px 0 ${Theme.colors.accents.green};
    }
  }

  &.color2 {
    i {
      &::before {
        text-shadow: 1px 2px 2px ${Theme.colors.accents.blue};
      }
    }

    h4 span {
      box-shadow: inset 0 -2px 0 ${Theme.colors.accents.blue};
    }
  }

  &.color3 {
    i {
      &::before {
        text-shadow: 1px 2px 2px ${Theme.colors.accents.yellow};
      }
    }

    h4 span {
      box-shadow: inset 0 -2px 0 ${Theme.colors.accents.yellow};
    }
  }

  &.color4 {
    i {
      &::before {
        text-shadow: 1px 2px 2px ${Theme.colors.accents.purple};
      }
    }

    h4 span {
      box-shadow: inset 0 -2px 0 ${Theme.colors.accents.purple};
    }
  }
}
`

