import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/seo"
import Header from "../components/Header/Header"
import TopBar from "../components/TopBar/TopBar"
import Resume from "../components/Resume/Resume"

const IndexPage = () => {

  return (
    <Layout maxWidth="96rem" width="90%">
      <TopBar pageHeader="" breadcrumbs={false}/>
      <Header ruleTitle={`Résumé`.toUpperCase()} ruleIcon="icon-leaf"/>
      <SEO stitle="Home" />
      <Resume />
    </Layout>
  )
}

export default IndexPage
