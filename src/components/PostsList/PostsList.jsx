import React from "react"
import Layout from "../Layout/Layout"
import Header from "../Header/Header"
import SEO from "../SEO/seo"
import PostPreview from "../PostPreview/PostPreview"
import * as Styled from '../PostsList/PostsList.styles'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Rule from "../Rule/Rule"
import getColor from "../utils/getColor"
import PageTransition from '../../../plugins/gatsby-v3-plugin-page-transitions';

const PostsList = ({...data}) => {
  const {posts, nextPagePath, prevPagePath, breadcrumbs, colors, title, seoDescription} = data.pageContext
  let colorsCopy = Object.assign([], colors)
  
  const articles = posts.map(node => {
    return (
      // <div className="col-sm-12 col-md-6">
        <PostPreview post={node} key={node.slug} color={getColor(colors, colorsCopy)} />
      // </div>
    )
  });

  const prevBtn = (
     <div className="col-sm-6 nav-prev left-block">
       {prevPagePath ? (
         <>
          <h4>NEWER POSTS</h4>
          <Styled.Button href={prevPagePath}>
            <i className="fal fa-long-arrow-left"></i>{` `}BACK
          </Styled.Button>
        </>
        )
      : null}
      </div>
    )

  const nextBtn = (
    <div className="col-sm-6 nav-next right-block">
    {nextPagePath ? (
      <>
        <h4>OLDER POSTS</h4>
        <Styled.Button href={nextPagePath}>
          CONTINUE{` `}<i className="fal fa-long-arrow-right"></i>
        </Styled.Button>
      </>
      ) : null}
    </div>
  )

  return (
    <Layout className="blog-posts">
      <Header />
      <SEO stitle={title} sdescription={seoDescription} />
      <PageTransition>
        <div className="posts-list">
          <Rule title={title} icon="fas fa-rss" />
          <Breadcrumbs crumbs={breadcrumbs} />
            {articles}
          <Styled.Navigation>
            {prevBtn}
            {nextBtn}
          </Styled.Navigation>
        </div>
      </PageTransition>
    </Layout>
  )
}

export default PostsList
