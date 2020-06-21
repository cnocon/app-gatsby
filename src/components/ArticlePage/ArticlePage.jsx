import React from "react"
import TopBar from "../TopBar/TopBar"
import Layout from "../Layout/Layout"
import Header from "../Header/Header"
import SEO from "../SEO/seo"
import PostPreview from "../PostPreview/PostPreview"
import * as Styled from '../ArticlePage/ArticlePage.styles'

const ArticlePage = ({...data}) => {
  const nextPage = data.pageContext.nextPagePath
  const prevPage = data.pageContext.prevPagePath

  const posts = data.pageContext.posts
    .map(({ node }) => {
      return <PostPreview post={node} key={node.published}/>
    });

  const prevBtn = prevPage ?
     <div className={nextPage ? "left-block" : "full-block"}>
        <Styled.Button href={prevPage}>
          <span style={{transform: "rotate(180deg) translateY(-5%)", display: 'inline-block'}}>→</span>&nbsp; Newer Posts
        </Styled.Button>
      </div>
    : null

  const nextBtn = nextPage ?
      <div className={prevPage ? "right-block" : "full-block"}>
        <Styled.Button href={nextPage}>
          Older Posts&nbsp; <span>→</span>
        </Styled.Button>
      </div>
    : null

  return (
    <Layout className="blog-posts" maxWidth="96rem" width={`90%`}>
      <TopBar pageHeader="Recent Posts" />
      <Header ruleTitle="Recent Posts" ruleIcon="icon-rss"/>
      <SEO stitle="Front End Development Blog"/>
      {posts}

      <Styled.Navigation>
        {prevBtn}
        {nextBtn}
      </Styled.Navigation>
    </Layout>
  )
}

export default ArticlePage
