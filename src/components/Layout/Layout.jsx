/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import * as Styled from "./Layout.styles"
import ThemeProvider from "../Theme/ThemeProvider"
import Theme from "../Theme/Theme"

const Layout = (props) => {
  return (
    <ThemeProvider theme={Theme}>
      <Styled.Container className="wrapper" {...props}>
        <main className={props.classNames}>{props.children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Styled.Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
