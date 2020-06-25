import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/seo"
import Header from "../components/Header/Header"
import Resume from "../components/Resume/Resume"
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs"
import Rule from "../components/Rule/Rule"

const IndexPage = () => {

  return (
    <Layout>
      <Header />
      <Rule title={`Résumé`} icon="icon-leaf"/>
      <Breadcrumbs crumbs={[]} />

      <SEO stitle="Home" />
      <Resume />
    </Layout>
  )
}

export default IndexPage
