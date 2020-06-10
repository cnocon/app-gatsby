// import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
// import { css } from "@emotion/core"
import { Container } from "../Layout/Layout.styles"
import * as Styled from "./Header.styles"


const Header = ({ backgroundColor, textColor}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          jobTitle
        }
      }
    }
  `);

  return (
    <Styled.Header backgroundColor="#fff" textColor="#345">
      <Container>
        <img alt="cvCard WP" src="https://cdn.buttercms.com/w6cMj4fOSSWeeNza9ouP" css={Styled.Image} />

        <Styled.Heading1>
          <Styled.H1Link to="/">{data.site.siteMetadata.author}</Styled.H1Link>
        </Styled.Heading1>
        <Styled.Subhead>{data.site.siteMetadata.jobTitle}</Styled.Subhead>

        <Styled.Nav>
          <Styled.NavLink to="/" activeStyle={{color: '#345'}}>Home</Styled.NavLink>
          <Styled.NavLink to="/articles" partiallyActive={true} activeStyle={{color: '#345'}}>Articles</Styled.NavLink>
          <Styled.NavLink to="/404" activeStyle={{color: '#345'}}>404</Styled.NavLink>
          <Styled.NavLink to={`/categories`} activeStyle={{color: '#345'}}>Category</Styled.NavLink>
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
