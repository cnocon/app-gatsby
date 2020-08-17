/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const sandboxData = require('./queries/sandboxData');
const { postCategoriesDataQuery } = require('./queries/postCategoriesData');
const { allPostsDataQuery } = require('./queries/allPostsData');

const chunkArray = (array, size) => {
  if (!array) return [];
  const firstChunk = array.slice(0, size);
  if (!firstChunk.length) return array; // base case/terminates recursion
  return [firstChunk].concat(chunkArray(array.slice(size, array.length), size));
}

exports.createPages = async ({ actions, graphql }) => {
  const categoriesData = await graphql(postCategoriesDataQuery);
  const allPostsData = await graphql(allPostsDataQuery);
  const allPosts = allPostsData.data.allButterPost.edges.reverse();
  const chunkedPosts = chunkArray(allPosts, 3);
  const groups = allPostsData.data.allButterPost.group;

  groups.forEach(group => {
    const sortedPosts = group.nodes.sort((a, b) => a.published < b.published)
    const chunkedPosts = chunkArray(sortedPosts, 3);
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
      sandboxData: sandboxData
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