import React from "react"
import PageHeader from "../PageHeader"
import Layout from "../Layout/Layout"
import SEO from "../seo"
// import { graphql } from 'gatsby'
import Post from "../Post/Post"

const Category = ({ ...data}) => {
  console.log(data.pageContext)
  const posts = data.pageContext.posts.map(p => {
    return <Post post={p} key={p.slug}/>
  });

  return (
    <Layout>
      <SEO title="Front End Development Blog" />
      <section>
        <PageHeader pageHeader="Category Page" />
        {posts}
      </section>
    </Layout>
  )
}

export default Category

// export const pageQuery = graphql`
//   query {
//     allButterPost(filter: {
//       tags: {
//         elemMatch: {
//           slug: { in: "git" }
//         }
//       }
//     }) {
//       edges {
//         node {
//           title
//           slug
//           url
//           summary
//           featured_image
//           featured_image_alt
//           published
//           tags {
//             name
//             slug
//           }
//           categories {
//             name
//             slug
//           }
//           body
//           date
//           id
//           meta_description
//           seo_title
//           status
//         }
//         previous {
//           slug
//           url
//         }
//       }
//       pageInfo {
//         itemCount
//         hasPreviousPage
//         hasNextPage
//         currentPage
//         pageCount
//         perPage
//         totalCount
//       }
//       group(field: id, limit: 5) {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//       totalCount
//     }
//   }
// `

