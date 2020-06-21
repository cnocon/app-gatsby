/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
// console.log(process.env)
function chunk(array, size) {
  if (!array) return [];
  const firstChunk = array.slice(0, size); // create the first chunk of the given array
  if (!firstChunk.length) {
    return array; // this is the base case to terminal the recursive
  }
  return [firstChunk].concat(chunk(array.slice(size, array.length), size));
}

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    {
      allButterPost(filter: {categories: {elemMatch: {slug: {in: ["cli", "git", "sass", "javascript", "workflow"]}}}}, sort: {fields: published}) {
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
  const allPosts = data.allButterPost.edges.reverse();
  const chunkedPosts = chunk(allPosts, 4);

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

  allPosts.forEach(({ node }) => {
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

  chunkedPosts.forEach((collection, index) => {
    actions.createPage({
      path: `/articles/page/${index + 1}`,
      component: path.resolve(`./src/components/ArticlePage/ArticlePage.jsx`),
      context: {
        posts: collection,
        prevPagePath: index < 1 ? null : `/articles/page/${index}`,
        nextPagePath: index + 1 === chunkedPosts.length ? null : `/articles/page/${index + 2}`,
        breadcrumbs: [
          {
            name: `Recent Posts`,
            path: `/articles/page/${index+1}`,
          },
        ]
      },
    })
  })
}
