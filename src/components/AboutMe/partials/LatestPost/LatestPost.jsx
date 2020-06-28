import React from 'react'
import { Link } from 'gatsby'
import * as Styled from './LatestPost.styles'


const LatestPost = ({post, date}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4" key={post.published} style={{marginBottom: '3rem'}}>
      <Styled.LatestPost>
        <Styled.LatestPostHeading>
        
          <Styled.ImageContainer>
            <img
              src={post.featured_image}
              alt={post.featured_image_alt}
            />
          </Styled.ImageContainer>
          
          <Link to={`/articles/${post.slug}`} className="post-link">
            {post.title}
          </Link>
        <Styled.Date>
          {date}
        </Styled.Date>
        
        </Styled.LatestPostHeading>
        <p css={Styled.PostParagraph}>{post.summary}</p>
      </Styled.LatestPost>
    </div>
  )
}

export default LatestPost
