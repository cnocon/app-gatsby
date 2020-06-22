/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

const chunk = (array, size) => {
  if (!array) return [];
  // create the first chunk of the given array
  const firstChunk = array.slice(0, size);

  if (!firstChunk.length) {
    // this is the base case to terminate the recursion
    return array;
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
            name: `Recent Posts`,
            path: `/articles`,
          },
        ]
      },
    })
  })

  actions.createPage({
    path: `/`,
    component: path.resolve(`./src/components/AboutMe/AboutMe.jsx`),
    context: {
      posts: allPosts.slice(0,3),
      breadcrumbs: null,
    },
  })

  allPosts.forEach(({ node }) => {
    actions.createPage({
      path: `/articles/${node.slug}`,
      component: path.resolve(`./src/components/Post/Post.jsx`),
      context: {
        post: node,
        breadcrumbs: [
          {
            name: `Recent Posts`,
            path: `/articles`,
          },
        ]
      },
    })
  })

  chunkedPosts.forEach((collection, index) => {
    actions.createPage({
      path: `/articles/page-${index + 1}`,
      component: path.resolve(`./src/components/PostsList/PostsList.jsx`),
      context: {
        posts: collection,
        prevPagePath: index < 1 ? null : `/articles/page-${index}`,
        nextPagePath: index + 1 === chunkedPosts.length ? null : `/articles/page-${index + 2}`,
        breadcrumbs: [
          {
            name: `Recent Posts`,
            path: `/articles/page-${index+1}`,
          },
        ]
      },
    })
  })
}
