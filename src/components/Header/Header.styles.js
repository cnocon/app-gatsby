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

// export const Image = styled(Img)`
//   height: 16rem;
//   width: 16rem;
//   border-radius: 50%;
//   vertical-align: middle;
//   margin: 0 auto;
//   border-radius: 8rem;
//   display: block !important;
//   // border: .4rem solid #F4F6F7;
// `

export const ImageEl = styled.img`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  vertical-align: middle;
  margin: 0 auto;
  border-radius: 50%;
  display: block !important;
  // border: .4rem solid #F4F6F7;

  @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
    height: 12rem;
    width: 12rem;
  }
`

export const Heading1 = styled.h1`
  margin: .9em 0 0 0;
  padding: 0;
  font-weight: 300;
  font-size: 2.25rem;
  line-height: 1.5em;
  -webkit-backface-visibility: hidden;
  font-family: Lato, sans-serif;

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
  font-style: italic;
  padding: .3rem 1rem;
  background-color: ${Theme.colors.accents.background.yellow};
  color: #345;
  color: rgba(0,0,0,.7);
  border-radius: .4rem;
  line-height: 1;
  text-transform: lowercase;

  @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
    font-size: ${Theme.fonts.sizes.sm};
  }
`

export const Nav = styled.ul`
    position: relative;
    display: flex;
    flex-direction: row;
    margin: ${Theme.spacing.md} 0 0;
    padding: 0;
    list-style: none;
    justify-content: space-around;
    width: 100%;

    @media screen and (min-width: ${Theme.breakpoints.min.md}) {
      // height: 4rem;
      margin: ${Theme.spacing.md} 0;
    }
`

export const NavItem = styled.li`
  display: flex;
  margin: 0 0 1rem;
  text-align: center;
  text-decoration: none;
  flex-basis: 33%;
  justify-content: center;
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

