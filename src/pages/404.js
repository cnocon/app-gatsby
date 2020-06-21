import React from "react"

import TopBar from "../components/TopBar/TopBar"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import SEO from "../components/SEO/seo"
import NotFound from "../components/NotFound/NotFound"

const NotFoundPage = () => (
  <Layout>
    <SEO stitle="404: Not found" />
    <TopBar pageHeader="Recent Posts" />
    <Header ruleTitle="404: Page Not Found" ruleIcon="icon-info"/>
    <NotFound />
  </Layout>
)

export default NotFoundPage
