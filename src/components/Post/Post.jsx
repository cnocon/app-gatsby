import React from "react"
import Layout from "../Layout/Layout"
import Header from "../Header/Header"
import { ReadableContent } from '../PostPreview/PostPreview.styles'
import SEO from "../SEO/seo"
import ReactHtmlParser from 'react-html-parser'
import * as Styled from "./Post.styles"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Rule from "../Rule/Rule"
import EntryMeta from "../EntryMeta/EntryMeta"
import PageTransition from 'gatsby-v2-plugin-page-transitions';

const AddThis = () => {
  return(
    <div className="addthis_inline_share_toolbox_vo2p"></div>
  )
}

const Post = ({...data}) => {
  const { post, breadcrumbs, categoriesMap } = data.pageContext

  return (
    <Layout>
      <Header />
      <SEO
        stitle={post.title}
        sdescription={post.summary}
        imagePath={post.featured_image}
      />

      <Rule
        title={`Level: ${post.tags[0].name.toUpperCase()}`}
        icon="rule-icon icon-chart-bar"
      />

      <PageTransition>
        <Breadcrumbs crumbs={breadcrumbs} />

        <section css={theme => ({paddingBottom: theme.spacing.lg})}>
          <ReadableContent className="hentry post post-single">
            <header css={Styled.HeaderStyles}>
              <Styled.PostTitle className="title">
                {post.title}
              </Styled.PostTitle>
              
              <AddThis /><br/>
              
              <EntryMeta
                categoriesMap={categoriesMap}
                published={post.published}
                categories={post.categories}
              />
            </header>
            <div className="entry-content clearfix">
              <div className="main-content">
                {ReactHtmlParser(post.body)}
              </div>
            </div>
          </ReadableContent>
        </section>
      </PageTransition>
    </Layout>
  )
}

export default Post;
