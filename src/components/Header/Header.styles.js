// import React from "react"
import styled from "@emotion/styled"
// import { css } from "@emotion/core"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Theme from "../Theme/Theme"

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: ${Theme.fonts.body};

  @media screen and (min-width: ${Theme.breakpoints.min.lg}) {
    width: ${Theme.layout.widths.default};
    max-width: ${Theme.layout.widths.defaultMax};
  }
`

export const Header = styled.header(
  ({theme}) => ({
    backgroundColor: `#fff`,
    zIndex: 200,
    margin: `0 auto`,
    padding: `3rem 0 0`,
    width: `${theme.layout.widths.full}`,
    textAlign: `center`,
    display: 'block',
    boxSizing: 'border-box'
  })
)

export const Image = styled(Img)`
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  vertical-align: middle;
  margin: 0 auto;
  display: block;
  // border: .4rem solid #F4F6F7;
  border: 0;
`

export const ImageEl = styled.img`
  height: 12rem;
  width: 12rem;
  vertical-align: middle;
  margin: 0 auto;
  border-radius: 50%;
  display: block !important;
  // border: .4rem solid #F4F6F7;
  border: 0;

  @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
    height: 12rem;
    width: 12rem;
  }
`

export const Heading1 = styled.h1`
  margin: .9em 0 0 0;
  padding: 0;
  font-weight: 300;
  font-size: 24px;
  line-height: 1.5em;
  -webkit-backface-visibility: hidden;
  font-family: Lato, sans-serif;
  // text-transform: lowercase;
  font-weight: 600;


  @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
    font-size: ${Theme.fonts.sizes.md};
  }
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
  font-size: ${Theme.fonts.sizes.default};
  margin: .1em 0 .6em;
  display: inline-block;
  padding: .3rem 1rem;
  line-height: 1;
  color: transparent;
  font-weight: 500;
  font-size: 17px;
  font-family: ${Theme.fonts.body.family};
  letter-spacing: .5px;
`

export const Nav = styled.ul`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    list-style: none;
`

export const NavItem = styled.li`
  display: flex;
  margin: 0 0 1rem;
  text-align: center;
  text-decoration: none;
  flex-basis: 15.9%;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  color: ${Theme.colors.grays.text};
  text-decoration: none;
  font-size: 3rem;
  cursor: pointer;
  text-transform: lowercase;
  font-family: Lato, sans-serif;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 1px;
  padding: 0 3rem;
  transition: all .4s;

  @media screen and (min-width: ${Theme.breakpoints.min.md}) {
    font-size: 4rem;
  }
  
  &.active {
    color: #345;
  }

  &:hover {
    color: #345;
  }
`

