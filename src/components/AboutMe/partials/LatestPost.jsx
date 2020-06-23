import React from 'react'
import { Link } from 'gatsby'
import {
  Testo,
  TestoHeading,
  ImageContainer,
  Date,
  PostParagraph
} from '../AboutMe.styles'


const LatestPost = ({post, date}) => {
  return (
    <div className="col-sm-12 col-md-4" key={post.published}>
      <Testo>
        <TestoHeading>
          <ImageContainer>
            <img
              src={post.featured_image}
              alt={post.featured_image_alt}
            />
          </ImageContainer>
          <div style={{textAlign: 'center'}}>
            <Link to={`/articles/${post.slug}`} className="post-link">
              {post.title}
            </Link>
          </div>
        <Date>
          <i className="fad fa-calendar-day"></i>
          {date}
        </Date>
        </TestoHeading>
        <p css={PostParagraph}>{post.summary}</p>
      </Testo>
    </div>
  )
}

export default LatestPost
