import React from "react"
import PageHeader from "../components/PageHeader"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
// import Post from "../components/Post/Post"

const Categories = ({ data }) => {
  const categories = data.allButterPost.group
    .map(({ g }) => {
      return g.fieldValue
    });

  return (
    <Layout>
      <SEO title="Front End Development Blog" />
      <section>
        <PageHeader pageHeader="Categories" />
        <h3>{categories.join(', ')}</h3>
      </section>
    </Layout>
  )
}

export default Categories

export const pageQuery = graphql`
  query {
    allButterPost {
      edges {
        node {
          categories {
            name
            slug
          }
          tags {
            name
            slug
          }
          author {
            first_name
            last_name
            email
            slug
            bio
            title
            linkedin_url
            facebook_url
            instagram_url
            pinterest_url
            twitter_handle
            profile_image
          }
        }
        previous {
          id
        }
      }
      group(field: categories___slug) {
        field
        fieldValue
        nodes {
          featured_image
          featured_image_alt
          id
          meta_description
          slug
          tags {
            name
            slug
          }
          summary
          title
          url
          seo_title
          published
          categories {
            name
            slug
          }
          author {
            profile_image
            last_name
            first_name
            title
            twitter_handle
          }
        }
        pageInfo {
          perPage
        }
      }
      nodes {
        id
      }
    }
  }
`

