import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import { Container } from "../Layout/Layout.styles"
import * as Styled from "./Header.styles"

const HomeRule = ({title, icon}) => {
  return (
    <Styled.RuleWrapper>
      <span css={Styled.RuleSpan}>
        <i className={`rule-icon ${icon}`}></i>
        {title}
      </span>
    </Styled.RuleWrapper>
  )
};

const Header = ({ ruleTitle, ruleIcon }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "square-portrait.png" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Styled.Header>
      <Container>

        <Styled.Image fixed={data.placeholderImage.childImageSharp.fixed} />
        <Styled.Heading1>
          <Styled.H1Link to="/">{`Cristin O'Connor`}</Styled.H1Link>
        </Styled.Heading1>

        <Styled.Subhead>{`Front End Developer`}</Styled.Subhead>
        {/* <ul id="nav" className="menu-auto menu-custom vs-nav"><li className="vs-nav-left"><a href="#/about-me">about me</a></li><li className="vs-nav-current"><a href="#/portfolio">portfolio</a></li><li className="vs-nav-right"><a href="#/contact">contact</a></li><li className=""><a href="#/blog">blog</a></li><li className=""><a href="#/resume">resume</a></li></ul> */}
        <Styled.Nav>
          <Styled.NavItem>
            <Styled.NavLink to="/" activeStyle={{color: '#345'}}>home</Styled.NavLink>
          </Styled.NavItem>
          <Styled.NavItem>
            <Styled.NavLink to="/articles" partiallyActive={true} activeStyle={{color: '#345'}}>blog</Styled.NavLink>
          </Styled.NavItem>
        </Styled.Nav>
      </Container>

      {/* {isHome ? homeRule : null} */}
      <HomeRule title={ruleTitle} icon={ruleIcon}/>



    </Styled.Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Cristin O'Connor`,
}

export default Header

