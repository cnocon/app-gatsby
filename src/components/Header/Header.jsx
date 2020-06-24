import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import * as Sty from "./Header.styles"
import portrait from "./square-portrait.png"
import { window } from 'browser-monads';

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
  const [ArticlesClass, setArticlesClass] = useState("")
  const [ResumeClass, setResumeClass] = useState("")

  const setArticlesActive = () => {
    setArticlesClass(window.location.href.match(/\/articles/) ? "active" : "")
  }

  const setActiveOnLoad = () => {
    setResumeClass(window.location.href.match(/\/resume/) ? "active" : "")
    setArticlesClass(window.location.href.match(/\/articles/) ? "active" : "")

  }

  useEffect(() => {
    if (window) {
      // setArticlesActive()
      setActiveOnLoad()
    }
  })

  return (
    <Sty.Header>
      <Sty.Container>
        <Sty.ImageEl src={portrait} alt="Cristin O'Connor Avatar"/>
        <Sty.Heading1>
          <Sty.H1Link to="/">Cristin O'Connor</Sty.H1Link>
        </Sty.Heading1>

        <Sty.Subhead>Front End Developer</Sty.Subhead>
        <Sty.Nav>
          <Sty.NavItem>
            <Sty.NavLink to="/" activeClassName="active" activeStyle={{color: '#345'}}>home</Sty.NavLink>
          </Sty.NavItem>
          <Sty.NavItem>
            <Sty.NavLink to="/articles/page-1" className={ArticlesClass} activeClassName="active" activeStyle={{color: '#345'}}>blog</Sty.NavLink>
          </Sty.NavItem>
          <Sty.NavItem>
            <Sty.NavLink to="/resume" activeClassName="active" activeStyle={{color: '#345'}} className={ResumeClass} >résumé</Sty.NavLink>
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

