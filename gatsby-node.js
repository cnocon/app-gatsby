/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const { postCategoriesDataQuery } = require('./queries/postCategoriesData');
const { allPostsDataQuery } = require('./queries/allPostsData');
const { chunkArray } = require('./helpers/chunkArray');

exports.createPages = async ({ actions, graphql }) => {
  const categoriesData = await graphql(postCategoriesDataQuery);
  const allPostsData = await graphql(allPostsDataQuery);
  const allPosts = allPostsData.data.allButterPost.edges.reverse();
  const chunkedPosts = chunkArray(allPosts, 3);
  const categoryGroups = allPostsData.data.allButterPost.group;

  /**
   * CATEGORY PAGES
   * 
   * 3 posts per page (unlimited pages per category)
   */
  categoryGroups.forEach(categoryGroup => {
    const sortedPosts = categoryGroup.nodes.sort((a, b) => a.published < b.published)
    const chunkedPosts = chunkArray(sortedPosts, 3);
    const category = categoryGroup.fieldValue.toLowerCase().replace(/\s/g, '-')

    chunkedPosts.forEach((collection, index) => {
      actions.createPage({
        path: `/articles/${category}/page-${index + 1}`,
        component: path.resolve(`./src/components/PostsList/PostsList.jsx`),
        context: {
          categories: categoriesData.data.allButterPost.distinct,
          prevPagePath: index < 1 ? null : `/articles/${category}/page-${index}`,
          nextPagePath: index + 1 === chunkedPosts.length ? null : `/articles/${category}/page-${index + 2}`,
          title: `Posted in ${categoryGroup.fieldValue}`,
          stitle: `Latest Posts | Front End Development Blog`,
          seoDescription: `Latest ${categoryGroup.fieldValue} posts from Cristin O'Connor's Front End Development Blog`,
          category: category,
          posts: collection.reverse(),
          breadcrumbs: [
            {title: 'Home', path: '/'},
            {title: `Blog`,path: `/articles/page-1`},
            {title: category.charAt(0).toUpperCase() + category.slice(1), path: null},
          ]
        },
      })
    })
  })

  /**
   * LATEST POST PAGES 
   * 
   * 3 posts per page
   */
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
          {title: 'Home', path: '/'},
          {title: `Blog`, path: `/articles/page-1`},
          {title: `Page ${index + 1}`, path: null},
        ],
      },
    })
  })

  /**
   * POST SINGLE PAGES 
   * 
   */
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
        breadcrumbs: [
          { title: 'Home', path: '/'},
          { title: `Blog`, path: `/articles/page-1`},
          { title: node.node.title, path: null},
        ],
      },
    })
  })
}

