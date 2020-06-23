import React from "react"
import TopBar from "../TopBar/TopBar"
import Layout from "../Layout/Layout"
import Header from "../Header/Header"
import SEO from "../SEO/seo"
import PostPreview from "../PostPreview/PostPreview"
import * as Styled from '../PostsList/PostsList.styles'

const Category = ({ ...data}) => {
  const { category, breadcrumbs, nextPagePath, prevPagePath, colors } = data.pageContext

  const posts = data.pageContext.posts.map(p => {
    return <PostPreview post={p} key={p.slug} color={colors.pop()}/>
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
      <TopBar pageHeader={category} breadcrumbs={breadcrumbs} />
      <Header ruleTitle={`Posted in ${category.toUpperCase()}`} ruleIcon="icon-article-alt"/>
      <SEO stitle={`Posts from ${category}`} />

      <Styled.Section>
        {posts}

        <Styled.Navigation>
          {prevBtn}
          {nextBtn}
        </Styled.Navigation>
      </Styled.Section>
    </Layout>
  )
}

export default Category
