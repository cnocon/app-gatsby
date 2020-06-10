import React from "react"
import { Link } from "gatsby"

export default function PageHeader({ pageHeader, breadcrumbs }) {
  const crumbs = breadcrumbs || [{name: pageHeader, path: null}]
  const allBreadCrumbs = crumbs.map((crumb, i) => {
    if (crumb.path) {
      return <span key={i}> // <Link to={crumb.path}>{crumb.name}</Link></span>
    } else {
      return false;
    }
  });

  return (
    <header className="page-header">
      <h2 className="page-title">{pageHeader}</h2>
      <nav>
        <Link to="/">Home</Link> {allBreadCrumbs} // {pageHeader}
      </nav>
    </header>
  )
}
