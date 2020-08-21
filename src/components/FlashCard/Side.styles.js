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
  }

  pre > code span {
    font-size: 12px;
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

    /* border-top: 3px solid ${Theme.colors.grays.border}; */
    display: flex;
    justify-content: space-between;

    button {
      background-color: ${Theme.colors.default.mid};
      font-size: 19px;
      color: #fff;
      border: 0;
      padding: 0 10px;
      margin: 0 10px;
      width: 90px;
      height: 40px;
      border-radius: 4px;
      font-weight: 500;
      font-family: ${Theme.fonts.headings.family};
      cursor: pointer;
      letter-spacing: -.5px;

      &:hover {
        background-color: ${Theme.colors.default.base};
        color: #fff;
      }

      &:nth-of-type(2) {
        padding: 0;
        font-weight: 900;
        text-transform: uppercase;
        width: 56px;
        height: 56px;
        line-height: 60px;
        border: 2px solid #345;
        border-radius: 50%;
        margin: -10px 0;
        text-align: center;
        background-color: transparent;

        i,
        i::before {
          font-weight: 400;
          font-size: 45px;
          text-shadow: 1px 3px 1px rgba(0,0,0,.8);
        }
      }

      i { 
        &::before {font-weight: 900;}
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
    background-color: ${Theme.colors.default.mid};
    padding: 2px 8px;
    border-radius: 4px;
    vertical-align: baseline;
    height: 32px;
    line-height: 18px;
    color: white;
    font-weight: 500;
    font-family: ${Theme.fonts.headings.family};
    font-size: 17px;
    letter-spacing: -1px;

    i {font-size: 16px;}

    &.level {
      padding: 5px 8px 4px 10px;
      
      i {
        font-size: 18px;
        margin-left: 6px;
        line-height: 18px;
        vertical-align: inherit;
      }
    }

    &.category {
      padding: 5px 12px 4px 8px;
      
      i {
        margin-right: 6px;
        font-size: 18px;
        line-height: 18px;
        vertical-align: inherit;

        &::before {font-size: 15px; line-height: 22px; vertical-align: middle;}
      }
    }
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
    color: ${Theme.colors.accents.background.yellow};
  }
  
  .purple {
    color: ${Theme.colors.accents.purple};
  }

  .royal-blue {
    color: ${Theme.colors.accents.background.royalBlue};
  }
  
  .orange {
    color: ${Theme.colors.accents.background.orange};
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