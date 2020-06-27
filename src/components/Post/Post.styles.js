// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
// import { Link } from "gatsby"
import Theme from "../Theme/Theme"


export const PostTitle = styled.h1`
  font-size: ${Theme.fonts.sizes.xl};
  line-height: ${Theme.fonts.sizes.lineHeights.sm};
  margin: 20px 0 1.6rem;
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
