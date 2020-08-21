// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Theme from '../Theme/Theme'

export const Side = css`

  > section:first-of-type {
    height: 280px;
    overflow-y: scroll;
    padding: 20px 0;
    margin-right: -11px;
    padding-right: 11px;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }

    &::-webkit-scrollbar:vertical {
        width: 11px;
    }

    &::-webkit-scrollbar:horizontal {
        height: 11px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid #fff; /* should match background, can't be transparent */
        background-color: rgba(0, 0, 0, .5);
    }

  }

  .img-container { max-width: 100%; overflow: scroll; }
  .img-container img {
    min-width: 500px;
  }

  pre:not(.prettyprint) {
    display: inline-block;
    line-height: inherit;
    background-color: ${Theme.colors.grays.background};
    padding: 1px 6px;
    margin: 0;
    text-align: left;
  }

  pre > code span {
    font-size: 12px;
    text-align: left;
  }

  .section-inner {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .img-container-outer {  
      max-width: 100%;
      overflow-x: scroll;
      margin: 20px auto;
    }

    .prompt  { 
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 20px;
      max-width: 600px;
      margin: auto;
      align-items: center;

      ul, ol {text-align: left; list-style-position: outside;}

      li, p, div, td, th {
        font-family: ${Theme.fonts.headings.family};
        font-size: 18px;
        line-height: 26px;
      }

      li { font-size: 16px;}
      
      p:first-of-type,
      .text:first-of-type {
        font-weight: 600;

        strong, b, em {font-weight: 900;}
      }
    }
  }

  footer {
    background-color: ${Theme.colors.grays.border};
    padding: 20px 15px;
    margin: 0 -16px;
    display: flex;
    justify-content: space-between;
    perspective: 1000;

    button {
      background-color: ${Theme.colors.default.mid};
      font-size: 18px;
      color: #fff;
      border: 0;
      padding: 0 10px;
      margin: 0 10px;
      width: 90px;
      height: 30px;
      border-radius: 4px;
      font-weight: 500;
      font-family: ${Theme.fonts.headings.family};
      cursor: pointer;
      letter-spacing: -.5px;

      @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
        font-size: 15px;
        width: 60px; 
        i { display: none; }
      }

      &:hover {
        background-color: ${Theme.colors.default.base};
        color: #fff;
      }

      &:nth-of-type(2) {
        background-color: rgba(0,0,0,0);
        color: ${Theme.colors.default.mid};
        font-weight: 500;
        font-family: ${Theme.fonts.accent.family};
        text-transform: lowercase;
        margin: 0;
        padding: 0;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        text-align: center;
        transform: rotateZ(0deg);
        background-size: 40px;
        backface-visibility: hidden;
        transition: transform .4s ease-in;
        line-height: 50px;
        vertical-align: middle;
        position: relative;

        @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
          font-size: 15px;
        }

        i {
          display: flex;
          font-size: 60px;
          font-weight: 200;
          position: absolute;
          left: -5px;
          top: -3px;

          @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
            font-size: 30px;
          }
        }

        &:hover {
          /* opacity: .65; */
          /* transform: rotateZ(360deg); */
          color: transparent;
          i {color: transparent}
        }
      }

      &:last-of-type {margin-right: 0;}
      &:first-of-type {margin-left: 0;}
    }
  }

  header {
    margin: 0 -16px;
    padding: 0;
    border-bottom: 3px solid ${Theme.colors.grays.border};

    .subheader {
      display: flex;
      flex-direction: row;
      flex-basis: auto;
      width: 100%;
      justify-content: space-around;
      align-items: space-between;
      text-align: center;

      > * {
        flex-basis: auto;
        width: 33.333%;
        display: flex;
        align-self: center;
        justify-content: center;

        &:first-of-type:not(h3) { justify-content: flex-start; }
        &:last-of-type:not(h3) { justify-content: flex-end; }
      }

      > h3 {
        text-transform: uppercase; 
        font-family: ${Theme.fonts.accent.family};
        font-size: 2.25rem;
        line-height: 2.25rem;
        font-weight: 400;
        text-transform: uppercase;
        margin: 20px 0;
        padding-bottom: 6px;
        background-size: 100% 3px;
        transform: translateY(-1px);
        width: unset;
      }
    }
  }

  .tag {
    background-color: #fff;
    color: ${Theme.colors.default.mid};
    /* padding: 3px 6px; */
    /* border-radius: 8px; */
    vertical-align: middle;
    /* height: 32px; */
    line-height: 14px;
    font-weight: 500;
    font-family: ${Theme.fonts.headings.family};
    font-size: 14px;
    letter-spacing: .5px;
    text-transform: uppercase;

    @media screen and (max-width: ${Theme.breakpoints.max.xs}) {
      font-size: 12px;
      word-break: break-all;
      letter-spacing: -.5px;
    }

    &.level i {color: ${Theme.colors.default.background};}

    i {font-size: 13px; line-height: 13px; margin-right: 3px;}
  }

  .blue {
    color: ${Theme.colors.accents.blue};
  }

  .red {
    color: ${Theme.colors.accents.text.red};
  }
  
  .green {
    color: ${Theme.colors.accents.text.green};
  }
  
  .yellow {
    color: ${Theme.colors.accents.dark.yellow};
  }
  
  .purple {
    color: ${Theme.colors.accents.purple};
  }

  .royal-blue {
    color: ${Theme.colors.accents.royalBlue};
  }
  
  .orange {
    color: ${Theme.colors.accents.orange};
  }
  
  p,
  .text { 
    font-size: ${Theme.fonts.sizes.default};
    line-height: ${Theme.fonts.sizes.lineHeights.default};
    color: ${Theme.colors.default.base};
  }

  .img-container-outer { text-align: center; }
  .image-note {
    display: none;

    @media screen and (max-width: 600px) {
      display: block;
      text-align: center;
      width: 100%;
      font-size: 12px;
    }
  }
`