import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
       <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWpPost.edges.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }`
export default BlogPage