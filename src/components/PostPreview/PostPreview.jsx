import React from "react"
import ReactHtmlParser from 'react-html-parser';
import * as Styled from './PostPreview.styles'
import { ReadableContent } from '../Post/Post.styles'
import EntryMeta from "../EntryMeta/EntryMeta"

const PostPreview = ({ post, color }) => {
  
  return (
    <ReadableContent>
      <Styled.Header>
        <Styled.Title>
          <Styled.TitleLink
            to={`/articles/${post.slug}`}
            rel="bookmark"
            className={`box-shadow-${color}`}>
            {post.title}
          </Styled.TitleLink>
          
        </Styled.Title>
        <EntryMeta
          published={post.published}
          categories={post.categories}
          className="preview-entry-meta"
        />
      </Styled.Header>

      <div className="entry-content">
        <p>
          {ReactHtmlParser(post.summary)}
        </p>
      </div>

      <Styled.Button to={`/articles/${post.slug}`}>
        Read Full Article <span className="meta-nav">→</span>
      </Styled.Button>
    </ReadableContent>
  )
}

export default PostPreview;
