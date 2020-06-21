/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
// console.log(process.env)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
  {
    allButterPost(filter: {categories: {elemMatch: {slug: {in: ["cli", "git", "sass", "javascript"]}}}}, sort: {fields: published}) {
      edges {
        node {
          id
          title
          slug
          url
          summary
          categories {
            name
            slug
          }
          tags {
            name
            slug
          }
          body
          featured_image
          featured_image_alt
          meta_description
          published
          seo_title
          internal {
            content
            description
            ignoreType
            mediaType
          }
        }
        previous {
          tags {
            name
            slug
          }
          internal {
            content
            description
            ignoreType
            mediaType
          }
        }
      }
      group(field: categories___slug) {
        field
        fieldValue
        nodes {
          featured_image
          featured_image_alt
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
        }
      }
    }
  }
`)

  data.allButterPost.group.reverse().forEach(({ ...group }) => {
    actions.createPage({
      path: `/articles/category/${group.fieldValue.toLowerCase().replace(/\s/g, '-')}`,
      component: path.resolve(`./src/components/Category/Category.jsx`),
      context: {
        category: group.fieldValue,
        posts: group.nodes,
        breadcrumbs: [
          {
            name: `Blog`,
            path: `/articles`,
          },
        ]
      },
    })
  })

  data.allButterPost.edges.reverse().forEach(({ node }) => {
    actions.createPage({
      path: `/articles/${node.slug}`,
      component: path.resolve(`./src/components/PostSingle/PostSingle.jsx`),
      context: {
        post: node,
        breadcrumbs: [
          {
            name: `Blog`,
            path: `/articles`,
          },
        ]
      },
    })
  })
}
