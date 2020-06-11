import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import PostPreview from "../components/Post/PostPreview"

const Articles = ({ data }) => {
  const posts = data.allButterPost.edges
    .map(({ node }) => {
      return <PostPreview post={node} key={node.published}/>
    });

  return (
    <>
    <Layout className="blog-posts" maxWidth="100rem" width={`90%`}>
      <PageHeader pageHeader="Recent Posts" />
      <Header ruleTitle="Latest from the Blog" ruleIcon="icon-rss"/>
      <SEO stitle="Front End Development Blog"/>
      {posts}
    </Layout>
    </>
  )
}

export default Articles

export const pageQuery = graphql`
  query {
    allButterPost {
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

