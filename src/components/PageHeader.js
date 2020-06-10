import React from "react"
import { Link } from "gatsby"

export default function PageHeader({ pageHeader, breadcrumbs, hideHeader }) {
  const crumbs = breadcrumbs || [{name: pageHeader, path: null}]
  const allBreadCrumbs = crumbs.map((crumb, i) => {
    if (crumb.path) {
      return <span key={i}> / <Link to={crumb.path}>{crumb.name.toUpperCase()}</Link></span>
    } else {
      return false;
    }
  });
  const heading = hideHeader ? null : <h2 className="page-title">{pageHeader}</h2>;

  return (
    <header className="page-header">
      <nav className="breadcrumbs">
        <Link to="/">HOME</Link> {allBreadCrumbs} <span> / {pageHeader.toUpperCase()}</span>
      </nav>
      {heading}
    </header>
  )
}
