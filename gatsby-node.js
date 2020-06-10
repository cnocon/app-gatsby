/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
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
  `)

  data.allButterPost.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/articles/${node.slug}`,
      component: path.resolve(`./src/components/Post/PostSingle.jsx`),
      context: {
        post: node,
        breadcrumbs: [
          {
            name: 'Articles',
            path: '/articles',
          },
        ]
      },
    })
  })
}
