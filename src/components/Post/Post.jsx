import React from "react"
import { Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser';

const Post = ({post}) => {
  const date = new Date(post.published).toLocaleString()
  // const body = preview ?  post.summary : post.body;
  return (
    <article
      style={{
        display: `inline-block`,
        margin: `0 5% 0 0`,
        width: `70%`,
        padding: 0,
      }}>
      <h2>
        <Link to={`/articles/${post.slug}`}>{post.title}</Link>
      </h2>

      <div className="entry-meta">
            <span className="posted-in">posted in {post.categories.map(c => c.name).join(', ')}</span>
            <span className="posted-on"> on&nbsp;<time className="entry-date" datetime={post.published}>{date}</time></span>
          </div>
          {ReactHtmlParser(post.summary)}
        </article>


  )
}

export default Post;
