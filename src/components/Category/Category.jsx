import React from "react"
import TopBar from "../TopBar/TopBar"
import Layout from "../Layout/Layout"
import Header from "../Header/Header"
import SEO from "../SEO/seo"
import PostPreview from "../PostPreview/PostPreview"

const Category = ({ ...data}) => {
  const categoryName = data.pageContext.category
  const breadcrumbs = data.pageContext.breadcrumbs
  const posts = data.pageContext.posts.map(p => {
    return <PostPreview post={p} key={p.slug}/>
  });

  return (
    <>
    <Layout className="blog-posts" maxWidth="96rem" width={`90%`}>
      <TopBar pageHeader={categoryName} breadcrumbs={breadcrumbs} />
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
