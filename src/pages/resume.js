import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/seo"
import Header from "../components/Header/Header"
import Resume from "../components/Resume/Resume"
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs"
import Rule from "../components/Rule/Rule"
import PageTransition from '../../plugins/gatsby-v3-plugin-page-transitions';

const IndexPage = () => {

  return (
    <Layout css={{position: 'relative'}}>
      <Header />
      <Breadcrumbs crumbs={[]} />
      <SEO stitle="Home"/>
      <Rule title={'Resume'} icon="far fa-file-user"/>
      <PageTransition>
        <Resume />
      </PageTransition>
    </Layout>
  )
}

export default IndexPage
