import React from "react"
import { Link } from 'gatsby'

const Post = ({post}) => {
  console.log(post)
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
      {post.summary}
    </article>
  )
}

export default Post;
