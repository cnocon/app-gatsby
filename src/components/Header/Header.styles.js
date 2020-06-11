// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const Header = styled.header(
  props => ({
    backgroundColor: props.backgroundColor || `indigo`,
    zIndex: 200,
    margin: `0 auto`,
    padding: `1em 15px 0`,
    width: `100%`,
    textAlign: `center`,
    fontFamily: `Lato`,
  })
)

// export const siteTitle = css`
//   text-decoration: none;
//   margin: 1rem 0 0;
//   color: #fff;
//   text-align: center;
//   font-weight: normal;
// `

export const Image = styled(Img)`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  vertical-align: middle;
  margin: 0 auto;
  border-radius: 80px;
  border: 1px solid #fff;
  display: block !important;
`

export const Heading1 = styled.h1`
  margin: .9em 0 0 0;
  padding: 0;
  font-weight: 300;
  font-size: 1.4em;
  line-height: 1.4;
  -webkit-backface-visibility: hidden;
  font-family: Lato, sans-serif;
`

export const H1Link = styled(Link)`
  color: #345;
  text-decoration: none;
  font-family: inherit;

  &:hover {
    color: #000;
  }
`

export const Subhead = styled.p`
  font-size: 1em;
  margin: .1em 0 .6em;
  display: inline-block;
  font-style: italic;
  padding: 3px 10px;
  background: #FAF46A;
  color: #345;
  color: rgba(0,0,0,.7);
  border-radius: 4px;
  line-height: 1;
  text-transform: lowercase;
`

export const Nav = styled.nav`
  height: 40px;
  max-width: none;
  position: relative;
  display: block;
  margin: .9em auto 0 auto;
  padding: 0;
  list-style: none;
  line-height: 1.8;
`

// export const NavLi = css`
//   position: absolute;
//   visibility: hidden;
//   width: 100%;
//   display: inline-block;
//   margin-bottom: 10px;
//   text-align: center;
//   text-decoration: none;
// `

export const NavLink = styled(Link)`
  width: auto;
  font-size: 150%;
  position: relative;
  color: #D0DADC;
  text-decoration: none;
  font-weight: 800;
  font-size: 200%;
  margin: 0 1rem;
  text-transform: lowercase;
  &:hover {
    color: #345;
  }
`
