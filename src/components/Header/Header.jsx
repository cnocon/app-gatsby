import React from "react"
import PropTypes from "prop-types"
import * as Sty from "./Header.styles"
import portrait from "./square-portrait.png"

const HomeRule = ({title, icon}) => {
  return (
    <Sty.RuleWrapper>
      <span css={Sty.RuleSpan}>
        <i className={`rule-icon ${icon}`}></i>
        {title}
      </span>
    </Sty.RuleWrapper>
  )
};

const Header = ({ ruleTitle, ruleIcon }) => {
  return (
    <Sty.Header>
      <Sty.Container>
        <Sty.ImageEl src={portrait} alt="Cristin O'Connor Cartoon Portrait"/>
        <Sty.Heading1>
          <Sty.H1Link to="/">Cristin O'Connor</Sty.H1Link>
        </Sty.Heading1>

        <Sty.Subhead>Front End Developer</Sty.Subhead>
        <Sty.Nav>
          <Sty.NavItem>
            <Sty.NavLink to="/" activeStyle={{color: '#345'}}>about me</Sty.NavLink>
          </Sty.NavItem>
          <Sty.NavItem>
            <Sty.NavLink to="/resume" activeStyle={{color: '#345'}}>resume</Sty.NavLink>
          </Sty.NavItem>
          <Sty.NavItem>
            <Sty.NavLink to="/articles/page/1" partiallyActive={true} activeStyle={{color: '#345'}}>blog</Sty.NavLink>
          </Sty.NavItem>
        </Sty.Nav>
      </Sty.Container>
      {ruleTitle ? <HomeRule title={ruleTitle} icon={ruleIcon}/> : null }
    </Sty.Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Cristin O'Connor`,
}

export default Header

