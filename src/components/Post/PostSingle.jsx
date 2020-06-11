import React from "react"
import { Link } from 'gatsby'
import Layout from "../Layout/Layout"
import PageHeader from "../PageHeader"
import SEO from "../seo"
import ReactHtmlParser from 'react-html-parser';

const PostSingle = ({...data}) => {
  const post = data.pageContext.post
  const breadcrumbs = data.pageContext.breadcrumbs
  const date = new Date(post.published).toLocaleString()
  const links = post.categories.map(c => {
    return <Link to={`/articles/category/${c.slug}`} key={c.slug}>{c.name}</Link>
  })

  return (
    <Layout classNames="blog-single readable-content">
      <SEO stitle={post.title}/>
      <section className={`${post.slug}`}>
        <PageHeader pageHeader={post.title} hideHeader={true} breadcrumbs={breadcrumbs} />
        <article className="hentry post post-single">
          <header className="">
            <h1 className="">{post.title}</h1>
            <div className="entry-meta">
              <span className="posted-in">posted in {links}</span>
              <span className="posted-on"> on&nbsp;<time className="entry-date" dateTime={post.published}>{date}</time></span>
            </div>
          </header>
          <div className="entry-content clearfix">{ReactHtmlParser(post.body)}</div>
        </article>
      </section>
    </Layout>
  )
}

export default PostSingle;
