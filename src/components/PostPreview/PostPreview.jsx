import React from "react"
import ReactHtmlParser from 'react-html-parser';
import * as Styled from './PostPreview.styles'
import EntryMeta from "../EntryMeta/EntryMeta"

const PostPreview = ({ post, catMap, color }) => {

  return (
    <Styled.ReadableContent className="post-preview">
      <header className="post-preview-header">
        <Styled.Title>
          <Styled.TitleLink
            to={`/articles/${post.slug}`}
            rel="bookmark"
            className={`box-shadow-${color}`}>
            {post.title}
          </Styled.TitleLink>
        </Styled.Title>
        <EntryMeta
          categoriesMap={catMap}
          published={post.published}
          categories={post.categories}
        />
      </header>

      <div className="entry-content">
        <p style={{marginBottom: `0`}}>
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
