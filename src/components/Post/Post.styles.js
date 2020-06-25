// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
// import { Link } from "gatsby"
import Theme from "../Theme/Theme"

export const EntryContent = css`

.box-shadow-purple {
    box-shadow: inset 0 -.125em 0 ${Theme.colors.accents.purple};
    padding-bottom: 1px;
  }

  .background-accent-purple {
    background: ${Theme.colors.accents.purple};
    color: #000;
    border: 1px solid ${Theme.colors.accents.purple};
  }

  .border-accent-purple {
    background-color: ${Theme.colors.accents.purple};

    &:hover {
      background-color: ${Theme.colors.accents.purple};
      border-color: transparent;
      color: #fff;
    }

  }

  .box-shadow-red {
    box-shadow: inset 0 -.125em 0 ${Theme.colors.accents.red};
    padding-bottom: 1px;
  }

  .background-accent-red {
    background: ${Theme.colors.accents.red};
    color: #000;
    border: 1px solid ${Theme.colors.accents.red};
  }

  .border-accent-red {
    background-color: ${Theme.colors.accents.red};

    &:hover {
      background-color: ${Theme.colors.accents.red};
      border-color: transparent;
      color: #fff;
    }

  }

  .box-shadow-yellow {
    box-shadow: inset 0 -.125em 0 ${Theme.colors.accents.yellow};
    padding-bottom: 1px;
  }

  .background-accent-yellow {
    background: ${Theme.colors.accents.yellow};
    color: #000;
    border: 1px solid ${Theme.colors.accents.yellow};
  }

  .border-accent-yellow {
    background-color: ${Theme.colors.accents.yellow};
    ${'' /* border: 2px solid ${Theme.colors.grays.borderDark}; */}

    &:hover {
      background-color: ${Theme.colors.accents.yellow};
      border-color: transparent;
      color: ${Theme.colors.default.base};
    }
  }

  .box-shadow-blue {
    box-shadow: inset 0 -.125em 0 ${Theme.colors.accents.blue};
    padding-bottom: 1px;
  }

  .background-accent-blue {
    background: ${Theme.colors.accents.blue};
    color: #000;
    border: 1px solid ${Theme.colors.accents.blue};
  }

  .border-accent-blue {
    background-color: ${Theme.colors.accents.blue};
    ${'' /* border: 2px solid ${Theme.colors.grays.borderDark}; */}

    &:hover {
      background-color: ${Theme.colors.accents.blue};
      border-color: transparent;
      color: #fff;
    }
  }

  .box-shadow-green {
    box-shadow: inset 0 -.125em 0 ${Theme.colors.accents.green};
    padding-bottom: 1px;
  }

  .background-accent-green {
    background: ${Theme.colors.accents.green};
    color: #000;
    border: 1px solid ${Theme.colors.accents.green};
  }

  .border-accent-green {
    background-color: ${Theme.colors.accents.green};
    ${'' /* border: 2px solid ${Theme.colors.grays.borderDark}; */}

    &:hover {
      background-color: ${Theme.colors.accents.green};
      border-color: transparent;
      color: #fff;
    }
  }
`

export const PostTitle = styled.h1`
  font-size: ${Theme.fonts.sizes.xl};
  line-height: ${Theme.fonts.sizes.lineHeights.sm};
  margin: 20px 0 .5em;
  font-family: ${Theme.fonts.headings.family};
  font-weight: 900;
  margin-top: 0;
  font-size: 50px;
  line-height: 1.2;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;

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
    ${'' /* border-color: #345; */}
    ${'' /* background-color: white; */}
    ${'' /* background-color: #EDF1F3; */}
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
