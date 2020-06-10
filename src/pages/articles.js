import React from "react"
import PageHeader from "../components/PageHeader"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Post from "../components/Post/Post"

const Articles = ({ data }) => {
  const posts = data.allButterPost.edges
    .map(({ node }) => {
      return <Post post={node} />
    });

  return (
    <Layout>
      <SEO title="Front End Development Blog" />
      <section>
        <PageHeader pageHeader="Articles" />
        {posts}
        <article
          style={{
            display: `inline-block`,
            margin: `0 5% 0 0`,
            width: `70%`,
            padding: 0,
          }}>
          <p>Posts will go here</p>
        </article>
        <aside className="sidebar" style={{
          display: `inline-block`,
          margin: `0`,
          width: `25%`,
        }}>
          <blockquote><p>Hi I'm a blockquote in the sidebar.</p></blockquote>
        </aside>
      </section>
    </Layout>
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

