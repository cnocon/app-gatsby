import styled from '@emotion/styled'
import Theme from '../Theme/Theme'

export const IconColumnDiv = styled.div`
  text-align: center;
  padding: ${Theme.spacing.default} 0 ${Theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h4 {
    font-size: ${Theme.fonts.sizes.default};
    line-height: ${Theme.fonts.sizes.lineHeights.sm};
    font-family: ${Theme.fonts.headings.family};
    letter-spacing: 1px;
    font-weight: 400;
    margin: 0;
    text-transform: uppercase;
    margin-bottom: 0;
    line-height: ${Theme.fonts.sizes.lineHeights.lg};

    span {
      padding-bottom: 1px;
    }
  }

  p {
    font-size: ${Theme.fonts.sizes.sm};
    margin: ${Theme.spacing.xs} 0 0;
    font-weight: 400;
    color: ${Theme.colors.grays.textDark};

    b { 
      font-weight: 600;
      // color: ${Theme.colors.default.base};
    }
  }

  i {
    box-sizing: border-box;
    display: inline-block;
    width: 66px;
    height: 66px;
    line-height: 58px;
    font-size: 28px;
    text-align: center;
    background-color: #fff;
    font-weight: 500;
    color: ${Theme.colors.default.base};
    margin: 4px auto;

    @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
  }
}
`

