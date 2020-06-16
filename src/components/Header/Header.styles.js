// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const Header = styled.header(
  props => ({
    backgroundColor: `#fff`,
    zIndex: 200,
    margin: `0 auto`,
    padding: `1em 1.5rem 0`,
    width: `100%`,
    textAlign: `center`,
    fontFamily: `Arial`,
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
    height: 6rem;
    position: relative;
    display: block;
    margin: .9em auto 0;
    padding: 0;
    list-style: none;
`


export const NavItem = styled.li`
  display: inline-block;
  margin-bottom: 1rem;
  text-align: center;
  text-decoration: none;
  width: 30%;
  position: static;
  max-width: none;
`

export const NavLink = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
  position: static;
  color: #D0DADC;
  letter-spacing: -2px;
  text-decoration: none;
  font-weight: 700;
  font-size: 2.7rem;
  cursor: pointer;
  &:hover {
    color: hsla(197,92%,68%,1);
    color: #345;
  }
`

export const RuleWrapper = styled.h2`
  position: relative;
  max-width: 100rem;
  width: 100%;
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
    width: 100%;
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
