// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
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
`

export const Heading1 = styled.h1`
  margin: .9em 0 0 0;
  padding: 0;
  font-weight: 300;
  font-size: 2.25rem;
  line-height: 1.5em;
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
  font-size: 1.6rem;
  margin: .1em 0 .6em;
  display: inline-block;
  font-style: italic;
  padding: .3rem 1rem;
  background: #FAF46A;
  color: #345;
  color: rgba(0,0,0,.7);
  border-radius: .4rem;
  line-height: 1;
  text-transform: lowercase;
`

export const Nav = styled.ul`
    position: relative;
    display: block;
    margin: ${Theme.spacing.lg} auto;
    padding: 0;
    list-style: none;

    @media screen and (min-width: ${Theme.breakpoints.md}) {
      height: 6rem;
      margin: ${Theme.spacing.xl} auto 6rem;
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

  @media screen and (min-width: ${Theme.breakpoints.md}) {
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

export const RuleWrapper = styled.h2`
  position: relative;
  max-width: 100rem;
  width: ${Theme.layout.widths.full};
  margin: 1em 0;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 700;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: 3px;
    width: ${Theme.layout.widths.full};
    max-width: 96rem;
    border-bottom: 4px solid #F4F6F7;
  }
`
export const RuleSpan = css`
  position: relative;
  display: inline-block;
  padding-right: 1.4em;
  background: #fff;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: "Lato", Arial, sans-serif;
`
