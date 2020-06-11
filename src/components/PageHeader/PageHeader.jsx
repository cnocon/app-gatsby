import React from "react"
import { Link } from "gatsby"
import * as Styled from "./PageHeader.styles"


export default function PageHeader({ pageHeader, breadcrumbs }) {
  const crumbs = breadcrumbs || [{name: pageHeader, path: null}]
  const allBreadCrumbs = crumbs.map((crumb, i) => {
    if (crumb.path) {
      return <span key={i}> / <Link to={crumb.path}>{crumb.name.toUpperCase()}</Link></span>
    }

    return false;
  });

  return (
    <Styled.PageHeader className="page-header">
      <div className="breadcrumbs" css={Styled.LeftBlock} style={{fontSize: '1.25rem'}}>
        <Link to="/">CRISTIN.IO</Link> {allBreadCrumbs} <span>{pageHeader.length > 0 ? `/` : null} {pageHeader.toUpperCase()}</span>
      </div>
      <div css={Styled.RightBlock} style={{fontSize: '1.25rem'}}>
        <a className="social-link github" href="http://github.com/cnocon" target="_blank" rel="noreferrer"><i className="icon-github-circled"></i></a>
        <a className="social-link twitter" href="http://twitter.com/cnocon" target="_blank" rel="noreferrer"><i className="icon-twitter"></i></a>
        <a target="_blank" rel="noreferrer"></a>
        <a className="social-link linkedin" href="https://www.linkedin.com/in/cristinoconnor/" target="_blank" rel="noreferrer"><i className="icon-linkedin"></i></a>
        <a className="social-link email" href="mailto:her@cristin.io">
        <i className="icon-email"></i></a>
      </div>

      {/* {heading} */}
    </Styled.PageHeader>
  )
}
