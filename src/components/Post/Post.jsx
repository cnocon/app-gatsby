import React from "react"
import { Link } from 'gatsby'
import Layout from "../Layout/Layout"
import Header from "../Header/Header"
import { ReadableContent } from '../PostPreview/PostPreview.styles'
import SEO from "../SEO/seo"
import ReactHtmlParser from 'react-html-parser'
import * as Styled from "./Post.styles"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Rule from "../Rule/Rule"

const Post = ({...data}) => {
  const { post, breadcrumbs, categoriesMap } = data.pageContext
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(post.published).toLocaleDateString(undefined, options)
  const links = post.categories.map(c => {
    const color = categoriesMap[c.slug]
    return <Link to={`/articles/${c.slug}/page-1`} key={c.slug} className={`background-accent-${color}`}>{c.name}</Link>
  });

  return (
    <Layout>
      <Header />

      <SEO
        stitle={post.title}
        sdescription={post.summary}
        imagePath={post.featured_image}
        />

      <Rule title={`Level: ${post.tags[0].name.toUpperCase()}`} icon="rule-icon icon-chart-bar" />

      <Breadcrumbs crumbs={breadcrumbs} />

      <section style={{paddingBottom: `3rem`}}>
        <ReadableContent className="hentry post post-single">
          <header css={Styled.HeaderStyles}>
            <Styled.PostTitle className="title">{post.title}</Styled.PostTitle>
            <div css={Styled.EntryMeta}>
              <span className="posted-in">Posted in {links}</span>
              <span className="posted-on">on<time className="entry-date" dateTime={post.published}>{date}</time></span>
            </div>
          </header>
          <div className="entry-content clearfix" style={{fontSize: `1.6rem`}}>
            <div className="main-content">
              {ReactHtmlParser(post.body)}
            </div>
          </div>
        </ReadableContent>
      </section>
    </Layout>
  )
}

export default Post;
