import React from "react"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import SEO from "../components/SEO/seo"
import Rule from "../components/Rule/Rule"
import NotFound from "../components/NotFound/NotFound"

const NotFoundPage = () => (
  <Layout>
    <SEO stitle="404: Not found" />
    <Header />
    <Rule title="404: Page Not Found" icon="fa fas fa-poop"/>
    <NotFound />
  </Layout>
)

export default NotFoundPage
