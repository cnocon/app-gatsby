// import React from "react"
import styled from "@emotion/styled"
// import { css } from "@emotion/core"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Theme from "../Theme/Theme"

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: calc(${Theme.layout.widths.full} - 3.2rem);
  padding: 0;
  display: block;
  flex-direction: column;
  align-items: initial;
  justify-content: center;
  font-family: ${Theme.fonts.body};

  @media screen and (min-width: 768px) {
    width: ${Theme.layout.widths.default};
    max-width: ${Theme.layout.widths.defaultMax};
  }

  .box-shadow-blue {
    box-shadow: inset 0 -4px 0 ${Theme.colors.accents.blue};
    padding-bottom: 1px;
  }
  .box-shadow-yellow {
    box-shadow: inset 0 -4px 0 ${Theme.colors.accents.yellow};
    padding-bottom: 1px;
  }
  .box-shadow-purple {
    box-shadow: inset 0 -4px 0 ${Theme.colors.accents.purple};
    padding-bottom: 1px;
  }
  .box-shadow-red {
    box-shadow: inset 0 -4px 0 ${Theme.colors.accents.red};
    padding-bottom: 1px;
  }

.box-shadow-green {
  box-shadow: inset 0 -4px 0 ${Theme.colors.accents.green};
  padding-bottom: 1px;
}
`

export const Header = styled.header(
  () => ({
    backgroundColor: `#fff`,
    zIndex: 200,
    margin: `0 auto`,
    padding: `1em 1.5rem 0`,
    width: `${Theme.layout.widths.full}`,
    textAlign: `center`,
    fontFamily: `Arial`,
    display: 'block',
    boxSizing: 'border-box'
  })
)

export const Image = styled(Img)`
  height: 16rem;
  width: 16rem;
  border-radius: 50%;
  vertical-align: middle;
  margin: 0 auto;
  border-radius: 8rem;
  display: block !important;
  border: .4rem solid #F4F6F7;
`

export const ImageEl = styled.img`
  height: 16rem;
  width: 16rem;
  border-radius: 50%;
  vertical-align: middle;
  margin: 0 auto;
  border-radius: 8rem;
  display: block !important;
  border: .4rem solid #F4F6F7;

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
  font-size: 1.6rem;
  margin: .1em 0 .6em;
  display: inline-block;
  font-style: italic;
  padding: .3rem 1rem;
  background-color: ${Theme.colors.accents.text.yellow};
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
    display: block;
    margin: ${Theme.spacing.md} auto ${Theme.spacing.md} -1.6rem;
    padding: 0;
    list-style: none;

    @media screen and (min-width: ${Theme.breakpoints.min.md}) {
      height: 4rem;
      margin: ${Theme.spacing.md} auto 5rem;
    }
`


export const NavItem = styled.li`
  display: inline-block;
  margin: 0 1.5% 1rem;
  text-align: center;
  text-decoration: none;
  position: static;
  max-width: none;
  width: 30%;

  @media screen and (min-width: ${Theme.breakpoints.min.md}) {
    width: 22%;
    min-width: 175px;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:first-of-type {
    margin-left: 0;
  }
`

export const NavLink = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
  position: static;
  color: #D0DADC;
  letter-spacing: -2px;
  text-decoration: none;
  font-weight: 700;
  font-size: 2.6rem;
  cursor: pointer;
  transition: all .6s;
  
  &.active {
    color: #345;
  }

  @media screen and (min-width: 760px) {
    font-size: 4rem;
  }

  &:hover {
    color: hsla(197,92%,68%,1);
    color: #345;
  }
`

