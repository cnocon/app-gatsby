import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Theme from '../../../Theme/Theme'

export const LatestPost = styled.div`
  padding: ${Theme.spacing.default} ${Theme.spacing.xs} ${Theme.spacing.md};
  margin: 0;
  background: #fff;
  text-align: left;
  display: block;

  &::before {
    display: none !important;
  }
`

export const LatestPostHeading = styled.h2`
  display: block;
  margin: 0 0 ${Theme.spacing.sm};
  text-align: left;
  font-family: ${Theme.fonts.accent.family};
  font-weight: 200;
  padding: 0;
  text-align: left;

  .post-link {
    color: ${Theme.colors.default.base};
    font-size: ${Theme.fonts.sizes.sm};
    line-height: ${Theme.fonts.sizes.lineHeights.sm};
    text-decoration: none;
    padding-bottom: 1px;
    transition: all .3s;
    line-height: 1.3em;
    font-family: ${Theme.fonts.body.family};
    font-weight: 800;
    text-transform: uppercase;
    text-align: left;
    box-shadow: none;
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
  margin: 0 1rem .5rem 0;
  float: left;

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
  text-transform: none;
  font-size: ${Theme.fonts.sizes.sm};
  line-height: ${Theme.fonts.sizes.lineHeights.xs};
  color: ${Theme.colors.grays.textDark};
  text-align: center;
  font-family: ${Theme.fonts.accent.family};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .25px;
  text-align: left;
  margin: .5rem 0 .5rem 7rem;
`

export const PostParagraph = css`
  font-size: ${Theme.fonts.sizes.sm};
  line-height: ${Theme.fonts.sizes.lineHeights.md};
  text-align: left;
  margin: auto 0;
`
