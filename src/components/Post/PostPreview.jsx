import React from "react"
import { Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser';

const PostPreview = ({post}) => {
  const date = new Date(post.published).toLocaleString()

  const links = post.categories.map(c => {
    return <Link to={`/articles/category/${c.slug}`} key={c.slug}>{c.name}</Link>
  })

  return (
    <article className="post post-preview hentry">
      <header className="post-preview-header">
        <h3><Link to={`/articles/${post.slug}`} rel="bookmark">{post.title}</Link></h3>
        <div className="entry-meta">
          <span className="posted-in">posted in {links}</span>
          <span className="posted-on"> on&nbsp;<time className="entry-date" dateTime={post.published}>{date}</time></span>
      </div>
      </header>
      <div className="entry-content"><p>{ReactHtmlParser(post.summary)}</p></div>
      <Link className="button small blue colored more-link" to={`/articles/${post.slug}`}>Continue Reading <span class="meta-nav">→</span></Link>
    </article>
  )
}

export default PostPreview;
