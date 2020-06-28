import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Theme from '../../../Theme/Theme'

export const LatestPost = styled.div`
  margin: 0;
  background: #fff;
  display: inline-block;
  text-align: center;
  padding: ${Theme.spacing.default} 0;

  &::before {
    display: none !important;
  }
`

export const LatestPostHeading = styled.h2`
  display: block;
  margin: 0 auto ${Theme.spacing.sm};
  font-weight: 200;
  padding: 0;
  text-align: center;
  line-height: ${Theme.fonts.sizes.lineHeights.xs};

  .post-link {
    color: ${Theme.colors.default.base};
    font-size: ${Theme.fonts.sizes.default};
    text-decoration: none;
    padding-bottom: 1px;
    transition: all .3s;
    line-height: ${Theme.fonts.sizes.lineHeights.xs};
    font-family: ${Theme.fonts.body.family};
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    transition: box-shadow .4s;

    &:hover,
    &:focus,
    &:active {
      box-shadow: inset 0 -2px 0 ${Theme.colors.default.base};
    }
  }
`

export const ImageContainer = styled.span`
  display: block;
  width: 6rem;
  height: auto;
  vertical-align: middle;
  margin: 0 auto .5rem;

  img {
    display: block;
    height: auto;
    vertical-align: middle;
    margin: 0 auto;
    text-align: center;
    line-height: calc(100% - 14px);
  }
`


export const Date = styled.time`
  display: block;
  font-size: ${Theme.fonts.sizes.sm};
  line-height: ${Theme.fonts.sizes.lineHeights.xs};
  color: ${Theme.colors.grays.textDark};
  font-weight: 500;
  font-family: ${Theme.fonts.accent.family};
  text-transform: uppercase;
  letter-spacing: .25px;
  text-align: center;
  margin: .5rem 0;

`

export const PostParagraph = css`
  font-size: ${Theme.fonts.sizes.sm};
  line-height: ${Theme.fonts.sizes.lineHeights.md};
  text-align: left;
  margin: 0 auto;
`
