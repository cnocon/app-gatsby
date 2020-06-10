// import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
// import { css } from "@emotion/core"
import { Container } from "../Layout/Layout.styles"
import * as Styled from "./Header.styles"

const Header = ({ backgroundColor, textColor}) => {
  return (
    <Styled.Header backgroundColor="#fff" textColor="#345">
      <Container>
        <img alt="cvCard WP" src="https://cdn.buttercms.com/w6cMj4fOSSWeeNza9ouP" css={Styled.Image} />

        <Styled.Heading1>
          <Styled.H1Link to="/">{`Cristin O'Connor`}</Styled.H1Link>
        </Styled.Heading1>
        <Styled.Subhead>{`Front End Developer`}</Styled.Subhead>

        <Styled.Nav>
          <Styled.NavLink to="/" activeStyle={{color: '#345'}}>résumé</Styled.NavLink>
          <Styled.NavLink to="/articles" partiallyActive={true} activeStyle={{color: '#345'}}>Articles</Styled.NavLink>
          {/* <Styled.NavLink to="/404" activeStyle={{color: '#345'}}>404</Styled.NavLink> */}
        </Styled.Nav>

      </Container>
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
