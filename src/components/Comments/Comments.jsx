import React from 'react'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import { siteMetadata } from '../../../gatsby-config'
import styled from "@emotion/styled"
import Theme from "../Theme/Theme"

const CommentsStyles = styled.div`
  
`;


function Comments({ post, data, pageLocation }) {
  let disqusConfig = {
    url: `${siteMetadata.siteUrl + pageLocation.pathname}`,
    identifier: post._id,
    title: post.title,
  }
  return (
    <CommentsStyles>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </CommentsStyles>
  )
}

export default Comments