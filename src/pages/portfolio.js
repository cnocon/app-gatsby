import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/seo"
import Header from "../components/Header/Header"
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs"
import Rule from "../components/Rule/Rule"
import PortfolioList from "../components/PortfolioList/PortfolioList"
import $ from 'jquery'

const IndexPage = () => {
  useEffect(() => {
    $('body').fadeIn(400);
  }, [])

  return (
    <Layout>
      <Header />
      <Breadcrumbs crumbs={[]} />
      <SEO stitle="Portfolio | Cristin O'Connor"/>
      <Rule title={'Portfolio'} icon="fal fa-folders"/>
      <PortfolioList />
    </Layout>
  )
}

export default IndexPage
