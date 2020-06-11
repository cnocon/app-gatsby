// import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import { Container } from "../Layout/Layout.styles"
import Img from "gatsby-image"
import * as Styled from "./Header.styles"

const Header = () => {
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
    <Styled.Header backgroundColor="#fff" textColor="#345">
      <Container>

        <Styled.Image fixed={data.placeholderImage.childImageSharp.fixed} />
        <Styled.Heading1>
          <Styled.H1Link to="/">{`Cristin O'Connor`}</Styled.H1Link>
        </Styled.Heading1>

        <Styled.Subhead>{`Front End Developer`}</Styled.Subhead>

        <Styled.Nav>
          <Styled.NavLink to="/" activeStyle={{color: '#345'}}>résumé</Styled.NavLink>
          <Styled.NavLink to="/articles" partiallyActive={true} activeStyle={{color: '#345'}}>Articles</Styled.NavLink>
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

