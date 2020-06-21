import React from "react"

import TopBar from "../components/TopBar/TopBar"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import SEO from "../components/SEO/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO stitle="404: Not found" />
    <TopBar pageHeader="Recent Posts" />
    <Header ruleTitle="404: Page Not Found" ruleIcon="icon-info"/>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
