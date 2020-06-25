import React from "react"
import { Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser';
import * as Styled from './PostPreview.styles'

const PostPreview = ({ post, catMap }) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(post.published).toLocaleDateString(undefined, options)

  const links = post.categories.map(c => {
    const color = catMap[c.slug]
    return <Link to={`/articles/${c.slug}/page-1`} key={c.slug} style={{fontSize: `1rem`}} className={`background-accent-${color}`}>{c.name}</Link>
  })

  return (
    <Styled.ReadableContent className="post-preview">
      <header className="post-preview-header">
        <Styled.Title>
          <Styled.TitleLink
            to={`/articles/${post.slug}`}
            rel="bookmark">
            {post.title}
          </Styled.TitleLink>
        </Styled.Title>
        <div css={Styled.EntryMeta}>
          <span className="posted-in">posted in {links}</span>
          <span className="posted-on">on<time className="entry-date" dateTime={post.published}>{date}</time></span>
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
