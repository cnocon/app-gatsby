const postCategoriesDataQuery = `{
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
}`;

exports.postCategoriesDataQuery = postCategoriesDataQuery;