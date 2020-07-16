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
    font-size: ${Theme.fonts.sizes.sm};
    line-height: ${Theme.fonts.sizes.lineHeights.sm};
    font-family: ${Theme.fonts.headings.family};
    letter-spacing: 1px;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
    margin-bottom: 0;
    line-height: ${Theme.fonts.sizes.lineHeights.default};

    span {
      padding-bottom: 1px;
      color: ${Theme.colors.default.base};
    }
  }

  p {
    font-size: ${Theme.fonts.sizes.default};
    margin: ${Theme.spacing.xs} 0 0;
    font-weight: 400;
    color: ${Theme.colors.grays.textDark};

    b { 
      font-weight: 500;
    }
  }

  i {
    box-sizing: border-box;
    display: inline-block;
    width: 36px;
    height: 36px;
    line-height: 36px;
    // font-size: 18px;
    font-size: 30px;
    text-align: center;
    // background-color: #345;
    font-weight: 200;
    margin: 0 auto ${Theme.spacing.default};
    border-radius: 50%;
  }
}
`

