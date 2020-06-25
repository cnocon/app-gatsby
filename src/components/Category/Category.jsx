import React from "react"
import Layout from "../Layout/Layout"
import Header from "../Header/Header"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Rule from "../Rule/Rule"
import SEO from "../SEO/seo"
import PostPreview from "../PostPreview/PostPreview"
import * as Styled from '../PostsList/PostsList.styles'

const Category = ({ ...data}) => {
  const { category, breadcrumbs, nextPagePath, prevPagePath, colors } = data.pageContext

  const posts = data.pageContext.posts.map(p => {
    return <PostPreview post={p} key={p.slug} color={colors.sort((a, b) => 0.5 - Math.random()).pop()}/>
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
      <SEO stitle={`Posts from ${category}`} />
      <Rule title={`Posted in ${category.toUpperCase()}`} icon="icon-article-alt" />
      <Breadcrumbs crumbs={breadcrumbs} />
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
