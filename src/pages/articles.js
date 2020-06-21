import React from "react"
import TopBar from "../components/TopBar/TopBar"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import SEO from "../components/SEO/seo"
import { graphql } from 'gatsby'
import PostPreview from "../components/PostPreview/PostPreview"

const Articles = ({ data }) => {
  const posts = data.allButterPost.edges
    .map(({ node }) => {
      return <PostPreview post={node} key={node.published}/>
    });

  return (
    <Layout className="blog-posts" maxWidth="96rem" width={`90%`}>
      <TopBar pageHeader="Recent Posts" />
      <Header ruleTitle="Latest from the Blog" ruleIcon="icon-rss"/>
      <SEO stitle="Front End Development Blog"/>
      {posts.reverse()}
    </Layout>
  )
}

export default Articles

export const pageQuery = graphql`
  query {
    allButterPost(sort: {fields: published}) {
      edges {
        node {
          title
          slug
          url
          summary
          featured_image
          featured_image_alt
          published
          tags {
            name
            slug
          }
          categories {
            name
            slug
          }
          body
          date
          id
          meta_description
          seo_title
          status
        }
        previous {
          slug
          url
        }
      }
      pageInfo {
        itemCount
        hasPreviousPage
        hasNextPage
        currentPage
        pageCount
        perPage
        totalCount
      }
      group(field: id, limit: 5) {
        edges {
          node {
            id
          }
        }
      }
      totalCount
    }
  }
`

