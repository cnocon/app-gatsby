import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/seo"
import Header from "../components/Header/Header"
import Rule from "../components/Rule/Rule"
import PortfolioList from "../components/PortfolioList/PortfolioList"
import $ from 'jquery'

const PortfolioPage = () => {
  useEffect(() => {
    $('body').fadeIn(400);
  }, [])

  return (
    <Layout>
      <Header />
      <SEO stitle="Portfolio | Cristin O'Connor"/>
      <Rule title={'Portfolio'} icon="fal fa-folders"/>
      <PortfolioList />
    </Layout>
  )
}

export default PortfolioPage
