import React from "react"
import Layout from "../Layout/Layout"
import PageHeader from "../PageHeader"
import SEO from "../seo"
import ReactHtmlParser from 'react-html-parser';

const PostSingle = ({...data}) => {
  console.log(data)
  const post = data.pageContext.post
  const breadcrumbs = data.pageContext.breadcrumbs
  // const body = preview ?  post.summary : post.body;
  return (
    <Layout>
      <SEO title="Front End Development Blog"/>
      <section>
        <PageHeader pageHeader={post.title} breadcrumbs={breadcrumbs} />
        <article
          style={{
            display: `inline-block`,
            margin: `0 5% 0 0`,
            width: `70%`,
            padding: 0,
          }}>
          {ReactHtmlParser(post.body)}
        </article>
      </section>
    </Layout>
  )
}

export default PostSingle;
