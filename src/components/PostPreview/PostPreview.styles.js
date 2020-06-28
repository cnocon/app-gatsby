// import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Theme from "../Theme/Theme"
import { css } from "@emotion/core"

export const ReadableContent = styled.article`
  margin: ${Theme.spacing.default} auto;
  padding: ${Theme.spacing.xs} 0 ${Theme.spacing.xl};
  display: block;
  width: 100%;
  max-width: 100%;

  &.post-preview {
    margin-bottom: 2rem;
    margin-top: 2rem;

    p {
      ${'' /* margin: 0; */}
    }

    .entry-content {
      padding-bottom: 0;
    }
  }

  @media screen and (min-width: ${Theme.breakpoints.min.md}) {
    width: ${Theme.layout.widths.default};
    max-width: ${Theme.layout.widths.defaultMax};
    padding-left: ${Theme.spacing.default};
    padding-right: ${Theme.spacing.default};
  }
`;

export const Button = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: ${Theme.colors.default.base};
  padding: 0 ${Theme.spacing.default};
  display: block;
  text-align: center;
  letter-spacing: .03rem;
  border-radius: 4px;
  outline: 0;
  transiti5n: all .2s;
  font-size: ${Theme.fonts.sizes.xs};
  max-width: 18rem;
  line-height: 30px;
  height: 34px;
  font-family: ${Theme.fonts.body.family};
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid ${Theme.colors.default.base};
  color: ${Theme.colors.default.base};
  background-color: #fff;

  &:hover {
    background-color: ${Theme.colors.default.base};
    color: #fff;
  }
`

export const TitleLink = styled(Link)`
  font-size: ${Theme.fonts.sizes.lg};
  line-height: ${Theme.fonts.sizes.lineHeights.sm};
  color: ${Theme.colors.default.base};
  padding-bottom: 1px;
  transition: box-shadow .2s;

  @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
    font-size: ${Theme.fonts.sizes.md};
  }

  &.box-shadow-purple {
    box-shadow: inset 0 -4px 1px ${Theme.colors.accents.purple};

    &:hover {
      box-shadow: inset 0 -4px 0px ${Theme.colors.accents.text.purple};
    }
  }

  &.box-shadow-red {
    box-shadow: inset 0 -4px 1px ${Theme.colors.accents.red};

    &:hover {
      box-shadow: inset 0 -4px 0px ${Theme.colors.accents.text.red};
    }
  }

  &.box-shadow-yellow {
    box-shadow: inset 0 -4px 1px ${Theme.colors.accents.yellow};

    &:hover {
      box-shadow: inset 0 -4px 0px ${Theme.colors.accents.text.yellow};
    }
  }

  &.box-shadow-blue {
    box-shadow: inset 0 -4px 1px ${Theme.colors.accents.blue};

    &:hover {
      box-shadow: inset 0 -4px 0px ${Theme.colors.accents.text.blue};
    }
  }
    
  &.box-shadow-green {
    box-shadow: inset 0 -4px 1px ${Theme.colors.accents.green};

    &:hover {
      box-shadow: inset 0 -4px 0px ${Theme.colors.accents.text.green};
    }
  } 

  &:hover {
    color: ${Theme.colors.default.base} !important;
  }
`

export const Title = styled.h2`
  margin: 0 auto 1.6rem;
`

export const EntryMeta = css`
  float: left;
  width: 66px;
  font-weight: 400;
  font-size: 0.750em;
  color: #BFC5CD;
  font-weight: 400;
  font-size: 0.750em;
  line-height: 1.9;
  text-align: center;
  padding-bottom: 0;
  float: none;
  width: 100%;
  margin-bottom: 0;
  display: block;
  max-width: none;
  width: 100%;
  text-align: center;

  > span {
    display: block;
    margin: 0 auto 14px auto;
    max-width: 55px;
    min-height: 20px;
    text-align: center;
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 12px;
    display: inline-block;
    max-width: none;
  }

  a,
  .entry-date {
    padding: 4px 10px;
    margin: 0 2px;
    border: 1px solid #DDE4E6;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: .03em;
    font-weight: 800;
    color: #6A7686;
    -webkit-transition: color 0.1s, background-color .2s, border-color .2s; transition: color 0.1s, background-color .2s, border-color .2s;
  }

  a:hover {
    color: #345;
    border-color: #345;
  }

  h3 {
	  font-size: 12px;
    font-weight: 900;
    letter-spacing: .15em;
    color: #DDE4E6;
	}
  .posted-in {
    margin-right: 3px;
  }

  .posted-on time {
    margin-left: 5px;
  }
`
