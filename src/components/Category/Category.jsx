import React from "react"
import PageHeader from "../PageHeader"
import Layout from "../Layout/Layout"
import SEO from "../seo"
import PostPreview from "../Post/PostPreview"

const Category = ({ ...data}) => {
  const categoryName = data.pageContext.category
  const breadcrumbs = data.pageContext.breadcrumbs
  const posts = data.pageContext.posts.map(p => {
    return <PostPreview post={p} key={p.slug}/>
  });

  return (
    <Layout classNames="blog-posts readable-content">
      <SEO stitle={`${categoryName} | Front End Development Articles`} />
      <section>
        <PageHeader pageHeader={categoryName} breadcrumbs={breadcrumbs} hideHeader={true}/>
        {posts}
      </section>
    </Layout>
  )
}

export default Category
