import React from "react"
import PageHeader from "../PageHeader/PageHeader"
import Layout from "../Layout/Layout"
import Header from "../Header/Header"
import SEO from "../seo"
import PostPreview from "../Post/PostPreview"

const Category = ({ ...data}) => {
  const categoryName = data.pageContext.category
  const breadcrumbs = data.pageContext.breadcrumbs
  const posts = data.pageContext.posts.map(p => {
    return <PostPreview post={p} key={p.slug}/>
  });

  return (
    <>
    <Layout classNames="blog-posts" maxWidth="96rem" width={`90%`}>
      <PageHeader pageHeader={categoryName} breadcrumbs={breadcrumbs} />
      <Header ruleTitle={`Posted in ${categoryName.toUpperCase()}`} ruleIcon="icon-article-alt"/>
      <SEO stitle={`${categoryName} | Front End Development Articles`} />
      <section>
        {posts}
      </section>
    </Layout>
    </>
  )
}

export default Category
