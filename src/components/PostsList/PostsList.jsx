import React from "react"
import Layout from "../Layout/Layout"
import Header from "../Header/Header"
import SEO from "../SEO/seo"
import PostPreview from "../PostPreview/PostPreview"
import * as Styled from '../PostsList/PostsList.styles'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Rule from "../Rule/Rule"

const PostsList = ({...data}) => {
  const {nextPagePath, prevPagePath, categoriesMap, breadcrumbs} = data.pageContext

  const posts = data.pageContext.posts
    .map(({ node }) => {
      return <PostPreview post={node} key={node.published} catMap={categoriesMap} />
    });

  const prevBtn = prevPagePath ?
     <div className={nextPagePath ? "left-block" : "left-full-block"}>
        <Styled.Button href={prevPagePath}>
          Newer Posts&nbsp;<span>→</span>
        </Styled.Button>
      </div>
    : null

  const nextBtn = nextPagePath ?
      <div className={prevPagePath ? "right-block" : "right-full-block"}>
        <Styled.Button href={nextPagePath}>
        <span style={{transform: "rotate(180deg) translateY(-5%)", display: 'inline-block'}}>→</span>&nbsp;Older Posts
        </Styled.Button>
      </div>
    : null

  return (
    <Layout className="blog-posts">
      <Header />
      <SEO stitle="Front End Development Blog"/>
      <Rule title="Recent Posts" icon="rule-icon icon-rss" />
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
