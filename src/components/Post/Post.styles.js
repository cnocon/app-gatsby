// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
// import { Link } from "gatsby"
import Theme from "../Theme/Theme"

export const ReadableContent = styled.article`
  margin: ${Theme.spacing.default} auto;
  padding: ${Theme.spacing.xs} 0 ${Theme.spacing.xl};
  display: block;
  width: 100%;
  max-width: 100%;

  @media screen and (min-width: ${Theme.breakpoints.min.md}) {
    width: ${Theme.layout.widths.default};
    max-width: ${Theme.layout.widths.defaultMax};
    padding-left: ${Theme.spacing.lg};
    padding-right: ${Theme.spacing.lg};
  }

  &.post-preview {
    margin-bottom: 2rem;
    margin-top: 2rem;

    .entry-content {
      padding-bottom: 0;
    }
  }
`;


export const PostTitle = styled.h1`
  font-size: ${Theme.fonts.sizes.xxl};
  line-height: ${Theme.fonts.sizes.lineHeights.sm};
  margin: 20px 0 1.6rem;
  font-family: ${Theme.fonts.headings.family};
  font-weight: 900;
  margin-top: 0;
  line-height: 1.2;
  // font-weight: 800;
  font-weight: 300;
  text-align: center;
  // text-transform: uppercase;

  @media screen and (max-width: ${Theme.breakpoints.max.lg}) {
    font-size: ${Theme.fonts.sizes.xl};
  }
  @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
    font-size: ${Theme.fonts.sizes.lg};
  }
  @media screen and (max-width: ${Theme.breakpoints.max.xs}) {
    margin-top: 0;
  }
`

export const HeaderStyles = css`
  font-size: ${Theme.fonts.sizes.default};
`

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;

  .nav-prev {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-next {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  h4 {
    color: ${Theme.colors.grays.text};
  }

  a {
    font-family: ${Theme.fonts.headings.family};
    font-weight: 300;
    color: ${Theme.colors.default.base};
    font-size: ${Theme.fonts.sizes.default};
  }
`

export const EntryContent = css`

  img:not(.featured-image) {
    max-width: 100%;
    display: block;
    margin: 2.4rem auto;
    border: 4px solid ${Theme.colors.grays.border};
    padding: 1rem;
    /* box-shadow: 0 3px 5px 4px 10px rgba(0, 0, 0, .25); */
  }

  blockquote {
    position: relative;
    display: table;
    margin: 0 auto 0;
    padding: 2rem 5rem;

    &:before {
      display: none;
    }

    i {
      position: absolute;
      display: table-cell;
      border: 0;
      color: ${Theme.colors.grays.borderDark};

      &::before {
        color: ${Theme.colors.grays.borderDark};
        font-size: ${Theme.fonts.sizes.lg};
      }
    }

    p {
      display: table-cell;
      font-style: italic;
      font-family: Georgia, "Times New Roman", Times, serif;
      line-height: 1.5em;
      padding: 1rem 0 1rem 5.5rem;
      font-size: 2.25rem;
    }

    cite {
      display: block;
      font-size: 15px;
      letter-spacing: .04em;
      text-align: right;
      padding-right: 1em;
      margin-top: 12px;
      font-style: normal;
      font-weight: 400;
      color: ${Theme.colors.grays.textDark};

      &:before {
        content: "–";
        font-family: Georgia, "Times New Roman", Times, serif;
      }
    }
  }

  h2 {
      text-transform: uppercase;
      font-size: 25px;
      margin: 3.5rem 0 1rem 0;
      font-weight: 900;
      font-family: ${Theme.fonts.headings.family};
    }

    code {
      &:not([class^='lang-']) {
        background: ${Theme.colors.grays.background};
        padding: 2px 6px;
      }
    }

    i {
      font-size: 16px;
      margin-right: 14px;
      line-height: 39px;
      text-align: center;
      color: ${Theme.colors.grays.text} !important;
      background-color: #fff;
      border-radius: 50%;
      border: 4px solid ${Theme.colors.grays.border};
      display: inline-block;
      width: 47px;

      &:before {
        display: inline;
        margin-left: 0;
        margin-right: 0;
      }
    }

    img {
      padding: 0;
      margin: 1rem 0;
      border-radius: 4px;
      max-width: 100%;
      display: block;
      
      &.featured-image {
        float: right;
        max-width: 175px;
        width: 33%;
        margin: 0 0 1.6rem 3.15rem;
      }
    }

    p {
      font-size: 18px;
      line-height: 29px;
      font-family: ${Theme.fonts.headings.family};
      margin: 22px 0;
    }

    a {
      color: ${Theme.colors.default.base};
      text-decoration: none;

      /* box-shadow: inset 0 -3px 1px ${Theme.colors.accents.text.yellow}; */
      box-shadow: 0 3px 0 ${Theme.colors.accents.purple};
      transition: box-shadow .3s;
      padding-bottom: 1px;

      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
      }
    }

    ul,
    ol {
      margin-left: 20px;

      li {
        font-size: ${Theme.fonts.sizes.default};
        margin-bottom: ${Theme.spacing.sm};
        line-height: 1.4em;
      }
    }
    
    .sources {
      h3 {
        font-size: ${Theme.fonts.sizes.md};
      }
      p {
        font-size: ${Theme.fonts.sizes.sm};
        margin: 0 0 1rem;
        line-height: 2rem;
      }
    }

    .tagline {
 	    margin: 2em 0; padding: 1em 2em;
    }
    .tagline *:first-of-type {
      margin-top: 0
    }
    .tagline * {
      padding-bottom: 0; margin-bottom: 0;
    }
    .tagline h3 {
      font-size: 2em; padding: 0; line-height: 1.4; font-weight: 300; color: #6A7686;
    }

  /* DROP CAP */
   .drop-cap:first-letter {
      font-size: 50px; font-weight: 800; line-height: .8; float: left; padding: 4px 16px 0px 0;
    }

  }
`
