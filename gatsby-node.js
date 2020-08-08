/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const https = require("https");
const path = require(`path`);
const options = {
  'hostname': 'arcane-stream-45843.herokuapp.com',
  'path': '/categories/',
  'headers': {
    'Content-Type': 'application/json'
  }
};
let sandboxData;
https.get(options, function (res) {
  const chunks = [];
  res.on("data", function (chunk) {
    chunks.push(chunk);
  });
  res.on("end", async function (chunk) {
    const body = Buffer.concat(chunks);
    const x = await body.toString();
    sandboxData = x;
  });
  res.on("error", function (error) {
    console.error(error);
  });
});


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
  const categoriesData = await graphql(`
    {
      allButterPost(filter: {categories: {elemMatch: {}}}) {
        distinct(field: categories___slug)
        group(field: categories___slug) {
          edges {
            node {
              id
              categories {
                name
                slug
              }
            }
          }
        }
      }
    }
  `)

  const { data } = await graphql(`
    {
      allButterPost(filter: {categories: {elemMatch: {slug: {in: ["npm","node","netlify","webhooks","gatsby","cli","git","sass","javascript","workflow"]}}}}, sort: {fields: created}) {
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
  const chunkedPosts = chunk(allPosts, 3);
  const groups = data.allButterPost.group;

  groups.forEach(group => {
    const sortedPosts = group.nodes.sort((a, b) => a.published < b.published)
    const chunkedPosts = chunk(sortedPosts, 3);
    const category = group.fieldValue.toLowerCase().replace(/\s/g, '-')

    chunkedPosts.forEach((collection, index) => {
      actions.createPage({
        path: `/articles/${category}/page-${index + 1}`,
        component: path.resolve(`./src/components/PostsList/PostsList.jsx`),
        context: {
          categories: categoriesData.data.allButterPost.distinct,
          prevPagePath: index < 1 ? null : `/articles/${category}/page-${index}`,
          nextPagePath: index + 1 === chunkedPosts.length ? null : `/articles/${category}/page-${index + 2}`,
          title: `Posted in ${group.fieldValue}`,
          stitle: `Latest Posts | Front End Development Blog`,
          seoDescription: `Latest ${group.fieldValue} posts from Cristin O'Connor's Front End Development Blog`,
          category: category,
          posts: collection.reverse(),
          breadcrumbs: [
            {
              name: 'Home',
              path: '/',
            },
            {
              name: `Blog`,
              path: `/articles/page-1`,
            },
            {
              name: category.charAt(0).toUpperCase() + category.slice(1),
              path: null,
            },
          ]
        },
      })
    })
  })

  chunkedPosts.forEach((collection, index) => {
    actions.createPage({
      path: `/articles/page-${index + 1}`,
      component: path.resolve(`./src/components/PostsList/PostsList.jsx`),
      context: {
        categories: categoriesData.data.allButterPost.distinct,
        posts: collection.map(p => p.node),
        prevPagePath: index < 1 ? null : `/articles/page-${index}`,
        nextPagePath: index + 1 === chunkedPosts.length ? null : `/articles/page-${index + 2}`,
        title: "Latest Posts",
        stitle: "Latest Posts | Front End Development Blog",
        seoDescription: `Latest Posts from Cristin O'Connor's Front End Development Blog`,
        breadcrumbs: [
          {
            name: 'Home',
            path: '/',
          },
          {
            name: `Blog`,
            path: `/articles/page-1`,
          },
          {
            name: `Page ${index + 1}`,
            path: null,
          },
        ],
      },
    })
  })

  allPosts.forEach(( node, index ) => {
    actions.createPage({
      path: `/articles/${node.node.slug}`,
      component: path.resolve(`./src/components/Post/Post.jsx`),
      context: {
        post: node.node,
        categories: categoriesData.data.allButterPost.distinct,
        prevPost: index === 0 ? null : allPosts[index - 1].node,
        nextPost: index === allPosts.length - 1 ? null : allPosts[index + 1].node,
        categories: categoriesData.data.allButterPost.distinct,
        colors: ['blue', 'green', 'purple', 'blue'],
        breadcrumbs: [
          {
            name: 'Home',
            path: '/',
          },
          {
            name: `Blog`,
            path: `/articles/page-1`,
          },
          {
            name: node.node.title,
            path: null,
          },
        ],
      },
    })
  })

  actions.createPage({
    path: `/sandbox`,
    component: path.resolve(`./src/components/Sandbox/Sandbox.jsx`),
    context: {
      sandboxData: JSON.parse(sandboxData)
    },
  })

  actions.createPage({
    path: `/`,
    component: path.resolve(`./src/components/AboutMe/AboutMe.jsx`),
    context: {
      posts: allPosts.slice(0,6),
      categories: categoriesData.data.allButterPost.distinct,
      breadcrumbs: [
        {
          name: 'Home',
          path: null,
        },
      ],
    },
  })

}

// You can delete this file if you're not using it

// MY NODE TYPES ARE "SitePage"
// const { createFilePath } = require(`gatsby-source-filesystem`)
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   console.log(node.internal.type);
//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

// Points from Treehouse
// https.get('https://teamtreehouse.com/cristinoconnor.json', res => {
//   res.setEncoding("utf8");
//   let body = "";
//   res.on("data", data => {
//     body += data;
//   });
//   res.on("end", () => {
//     body = JSON.parse(body);
//     console.log(body.points);
//   });
// });