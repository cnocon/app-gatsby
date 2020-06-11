import React from "react"
import { Link } from 'gatsby'
import Layout from "../Layout/Layout"
import Header from "../Header/Header"
import PageHeader from "../PageHeader/PageHeader"
import { ReadableContent } from './PostPreview.styles'
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
    <Layout maxWidth="100rem" width={`90%`}>
      <PageHeader pageHeader={post.title} breadcrumbs={breadcrumbs} />
      <Header ruleTitle={`Level: ${post.tags[0].name.toUpperCase()}`} ruleIcon="icon-chart-bar"/>
      <SEO stitle={post.title}/>
      <section>

        <ReadableContent className="hentry post post-single">
          <header style={{fontSize: `1.6rem`}}>
            <h1 style={{fontSize: `2.75rem`, margin: `.25em 0 .5em`}}>{post.title}</h1>
            <div className="entry-meta">
              <span className="posted-in">posted in {links}</span>
              <span className="posted-on"> on&nbsp;<time className="entry-date" dateTime={post.published}>{date}</time></span>
            </div>
          </header>
          <div className="entry-content clearfix" style={{fontSize: `1.6rem`}}>{ReactHtmlParser(post.body)}</div>
        </ReadableContent>
      </section>
    </Layout>
  )
}

export default PostSingle;
