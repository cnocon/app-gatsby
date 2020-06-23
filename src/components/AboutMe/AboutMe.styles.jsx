import styled from '@emotion/styled'
import Theme from '../Theme/Theme'
// import { Link } from 'gatsby'
import { css } from '@emotion/core'


export const RotateWordsWrapper = styled.div`
  text-align: left;
  padding: 0 0 1em 0;
  font-family: ${Theme.fonts.headings.family};

  @media screen and (min-width: ${Theme.breakpoints.sm}) {
    text-align: center;
  }
`

export const RotateWords = styled.h2`
  &.rotate-header {
    font-weight: 300;
    font-size: ${Theme.fonts.sizes.lg};
    line-height: 1.4;
    font-family: ${Theme.fonts.headings.family};
    text-transform: none;
    color: #345;
    text-align: center;
    font-weight: 300;

    @media all and (min-width: ${Theme.breakpoints.sm}) {
      font-size: ${Theme.fonts.sizes.lg};
      text-align: center;
    }

    strong {
      letter-spacing: -1px;
      font-weight: 800 !important;
    }

    .rotate-words {
      font-size: inherit;

      min-height: 3.3rem;
      font-family: ${Theme.fonts.headings.family};
      display: inline-block;
      min-width: 18rem;

      text-align: left;

      @media all and (max-width: ${Theme.breakpoints.sm - 1}) {
        min-height: 2.7rem;
        ${'' /* text-align: left; */}
      }

      span {
        font-size: inherit;
        line-height: 1.4;
        position: absolute;
        opacity: 0;
        letter-spacing: -1px;
        font-family: ${Theme.fonts.headings.family};
        font-weight: 300;

        @media all and (min-width: ${Theme.breakpoints.sm}) {
          font-size: inherit;
        }

        &:first-of-type {
          opacity: 1;
        }

        &.rotate-in {
          font-size:inherit;
          line-height: 1.4;
          animation: rotateInWord .5s linear forwards;
          -webkit-animation: rotateInWord .5s linear forwards;
          font-weight: 800;

          @media all and (min-width: ${Theme.breakpoints.sm}) {
            font-size: inherit;
          }
        }

        &.rotate-out {
          font-size: inherit;
          animation: rotateOutWord .5s linear forwards;
          -webkit-animation: rotateOutWord .5s linear forwards;
          position: absolute;
          opacity: 0;
          font-weight: 800;
          letter-spacing: -1px;
          line-height: inherit;

          @media all and (min-width: ${Theme.breakpoints.sm}) {
            font-size: inherit;
          }
        }
      }

      @-webkit-keyframes rotateInWord {
          0% { opacity: 0; -webkit-transform: translateY(-39px); }
        100% { opacity: 1; -webkit-transform: translateY(0px); }
      }
      @-webkit-keyframes rotateOutWord {
          0% { opacity: 1; -webkit-transform: translateY(0px); }
        100% { opacity: 0; -webkit-transform: translateY(39px); }
      }
      @keyframes rotateInWord {
          0% { opacity: 0; transform: translateY(-39px); }
        100% { opacity: 1; transform: translateY(0px); }
      }
      @keyframes rotateOutWord {
          0% { opacity: 1; transform: translateY(0px); }
        100% { opacity: 0; transform: translateY(39px); }
      }
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: left;
    font-weight: 700;
    font-size: ${Theme.fonts.sizes.xs};
  }
`

export const Testo = styled.div`
  padding: ${Theme.spacing.default} ${Theme.spacing.sm} ${Theme.spacing.md};
  margin: 0;
  background: #fff;
  text-align: left;
  display: block;

  i {
    display: block;
    font-size: ${Theme.fonts.sizes.md};
    margin-bottom: ${Theme.spacing.sm};
  }

  &::before {
    display: none !important;
  }
`

export const TestoHeading = styled.h2`
  display: block;
  margin: 0 auto ${Theme.spacing.sm};
  text-align: center;
  font-family: ${Theme.fonts.accent.family};
  font-weight: 200;

  p {
    font-size: ${Theme.fonts.sizes.default};
    line-height: ${Theme.fonts.sizes.lineHeights.default};
  }

  .post-link {
    color: ${Theme.colors.default.base};
    font-size: ${Theme.fonts.sizes.default};
    line-height: ${Theme.fonts.sizes.lineHeights.default};
    text-decoration: none;
    padding-bottom: 1px;
    ${'' /* box-shadow: inset 0 -3px 0 ${Theme.colors.blue.boxShadow}; */}
    transition: all .3s;
    font-family: ${Theme.fonts.body.family};
    font-weight: 900;

    &:hover,
    &:focus,
    &:active {
      color: ${Theme.colors.blue.base};
      text-decoration: none;
      box-shadow: none;
      outline: 0;
    }
  }
`
export const Date = styled.time`
  display: block;
  text-transform: none;
  font-size: ${Theme.fonts.sizes.sm};
  line-height: ${Theme.fonts.sizes.lineHeights.sm};
  text-transform: none;
  color: ${Theme.colors.default.base};
  margin: ${Theme.spacing.sm} auto 0;
  text-align: center;
  font-family: ${Theme.fonts.body.family};
  font-weight: 400;


  i {
    display: inline-block;
    font-size: ${Theme.fonts.sizes.sm};
    line-height: inherit;
    margin-right: 6px;
    color: ${Theme.colors.grays.text};
  }
`

export const PostParagraph = css`
  font-size: ${Theme.fonts.sizes.sm};
  line-height: ${Theme.fonts.sizes.lineHeights.md};
  text-align: left;
  margin: auto 0;
`

export const ServiceDiv = styled.div`
  text-align: center;
  padding: ${Theme.spacing.default} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h4 {
    font-size: ${Theme.fonts.sizes.sm};
    line-height: ${Theme.fonts.sizes.lineHeights.sm};
    font-family: ${Theme.fonts.body.family};
    letter-spacing: 1px;
    font-weight: 900;
    text-transform: uppercase;
  }

  p {
    font-size: ${Theme.fonts.sizes.sm};
    color: ${Theme.colors.grays.text};
    margin: ${Theme.spacing.xs} 0 0;
    font-weight: 400;
  }

  &.color1,
  &.color2,
  &.color3,
  &.color4 {
    i {
      color: ${Theme.colors.grays.textLight};
      background: transparent !important;
      border: 4px solid ${Theme.colors.grays.border};
      border-radius: 50%;
      box-sizing: border-box;
      display: inline-block;
      width: 94px;
      line-height: 90px;
      font-size: 32px;
      border-radius: 50%;
      text-align: center;
    }
  }

  &.color1 {
    i {
      color: ${Theme.colors.accents.text.green};
    }

    h4 span {
      box-shadow: inset 0 -3px 0 ${Theme.colors.accents.green};
      padding-bottom: 1px;
    }
  }

  &.color2 {
    i {
      color: ${Theme.colors.accents.blue};
    }

    h4 span {
      box-shadow: inset 0 -3px 0 ${Theme.colors.accents.blue};
      padding-bottom: 1px;
    }
  }

  &.color3 {
    i {
      color: ${Theme.colors.accents.yellow};
    }

    h4 span {
      box-shadow: inset 0 -3px 0 ${Theme.colors.accents.yellow};
      padding-bottom: 1px;
    }
  }

  &.color4 {
    i {
      color: ${Theme.colors.accents.red};
    }

    h4 span {
      box-shadow: inset 0 -3px 0 ${Theme.colors.accents.red};
      padding-bottom: 1px;
    }
  }
}
`

export const ImageContainer = styled.span`
  display: block;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  margin: 0 auto ${Theme.spacing.xs}  ;
  border: 4px solid ${Theme.colors.grays.border};
  padding: 3px;
  vertical-align: middle;
  text-align: center;

  img {
    display: block;
    width: calc(100% - 14px);
    height: auto;
    max-height: calc(100% - 14px);
    vertical-align: middle;
    margin: 10px auto;
    text-align: center;
    line-height: calc(100% - 14px);
  }
`

export const Tweet = css`
  margin: 0 0 0 15% !important;

  @media all and (min-width: ${Theme.breakpoints.md}) {
    margin: 0 auto !important;
  }
`

export const HalfColumn = styled.div`
  &:first-of-type {
    @media all and (max-width: ${Theme.breakpoints.md}) {
      margin-bottom: ${Theme.spacing.xl};
    }
  }
`
