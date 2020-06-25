import React from "react"
import Layout from "../Layout/Layout"
import Header from "../Header/Header"
import SEO from "../SEO/seo"
import PostPreview from "../PostPreview/PostPreview"
import * as Styled from '../PostsList/PostsList.styles'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Rule from "../Rule/Rule"

const PostsList = ({...data}) => {
  const {nextPagePath, prevPagePath, colors, breadcrumbs} = data.pageContext

  const posts = data.pageContext.posts
    .map(({ node }) => {
      return <PostPreview post={node} key={node.published} color={colors.sort((a, b) => 0.5 - Math.random()).pop()}/>
    });

  const prevBtn = prevPagePath ?
     <div className={nextPagePath ? "left-block" : "full-block"}>
        <Styled.Button href={prevPagePath}>
          <span style={{transform: "rotate(180deg) translateY(-5%)", display: 'inline-block'}}>→</span>&nbsp; Newer Posts
        </Styled.Button>
      </div>
    : null

  const nextBtn = nextPagePath ?
      <div className={prevPagePath ? "right-block" : "full-block"}>
        <Styled.Button href={nextPagePath}>
          Older Posts&nbsp; <span>→</span>
        </Styled.Button>
      </div>
    : null

  return (
    <Layout className="blog-posts">
      <Header />
      <SEO stitle="Front End Development Blog"/>
      <Rule title="Recent Posts" icon="icon-rss" />
      <Breadcrumbs crumbs={breadcrumbs} />
      {posts}
      <Styled.Navigation>
        {prevBtn}
        {nextBtn}
      </Styled.Navigation>
    </Layout>
  )
}

export default PostsList
