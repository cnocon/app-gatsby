import React from "react"
import Layout from "../Layout/Layout"
import PageHeader from "../PageHeader"
import SEO from "../seo"
import ReactHtmlParser from 'react-html-parser';

const PostSingle = ({...data}) => {
  console.log(data)
  const post = data.pageContext.post
  const breadcrumbs = data.pageContext.breadcrumbs
  const date = new Date(post.published).toLocaleString()
  // const body = preview ?  post.summary : post.body;
  return (
    <Layout>
      <SEO title="Front End Development Blog"/>
      <section>
        <PageHeader pageHeader={post.title} breadcrumbs={breadcrumbs} />
        <article
          style={{
            display: `block`,
            margin: `0`,
            width: `100%`,
            padding: 0,
          }}>
          <div className="entry-meta">
            <span className="posted-in">posted in {post.categories.map(c => c.name).join(', ')}</span>
            <span className="posted-on"> on&nbsp;<time className="entry-date" datetime={post.published}>{date}</time></span>
          </div>
          {ReactHtmlParser(post.body)}
        </article>
      </section>
    </Layout>
  )
}

export default PostSingle;
