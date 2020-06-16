import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import { Container } from "../Layout/Layout.styles"
import * as Styled from "./Header.styles"
import portrait from "./square-portrait.png"

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
  return (
    <Styled.Header>
      <Container>
        {/* <Styled.Image fixed={data.placeholderImage.childImageSharp.fixed.src} key="wtf"/> */}
        <Styled.ImageEl src={portrait} alt="Cristin O'Connor Cartoon Portrait"/>
        <Styled.Heading1>
          <Styled.H1Link to="/">Cristin O'Connor</Styled.H1Link>
        </Styled.Heading1>

        <Styled.Subhead>Front End Developer</Styled.Subhead>
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

