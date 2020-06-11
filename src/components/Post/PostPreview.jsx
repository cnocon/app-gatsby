import React from "react"
import { Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser';
import * as Styled from './PostPreview.styles'

const PostPreview = ({post}) => {
  const date = new Date(post.published).toLocaleString()

  const links = post.categories.map(c => {
    return <Link to={`/articles/category/${c.slug}`} key={c.slug} style={{fontSize: `1rem`}}>{c.name}</Link>
  })

  return (
    <Styled.ReadableContent>
      <header className="post-preview-header">
        <h2 style={{margin: `1rem auto 1.6rem`}}>
          <Link to={`/articles/${post.slug}`} rel="bookmark" style={{fontSize: '2.75rem', lineHeight: `1.5em`, color: `#345`, boxShadow: `inset 0 -3px 0 rgba(118,215,254,.35)`}}>{post.title}</Link>
        </h2>
        <div className="entry-meta" style={{fontSize: '1.2rem'}}>
          <span className="posted-in">posted in {links}</span>
          <span className="posted-on"> on&nbsp;<time className="entry-date" dateTime={post.published}>{date}</time></span>
      </div>
      </header>

      <div className="entry-content">
        <p style={{fontSize: '1.6rem'}}>
          {ReactHtmlParser(post.summary)}
        </p>
      </div>

      <Styled.Button to={`/articles/${post.slug}`}>
        Read Full Article <span className="meta-nav">→</span>
      </Styled.Button>
    </Styled.ReadableContent>
  )
}

export default PostPreview;
