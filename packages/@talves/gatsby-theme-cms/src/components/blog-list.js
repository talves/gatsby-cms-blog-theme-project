import React from 'react'
import { graphql, Link } from 'gatsby'
import Collection from './collection'

export const fragment = graphql`
fragment BlogCollection on Blog {
  parent {
    ... on MarkdownRemark {
      html
      excerpt(format: PLAIN, pruneLength: 200)
    }
  }
  frontmatter {
    author {
      tag
      info {
        description
        name
      }
      id
    }
    title
    date
  }
  internal {
    type
  }
  id
  name
  rawBody
  slug
}
`

const BlogList = ({ data }) => {
  return (
    <>
      <h2>
        <Link to={`/`}>Home</Link>
      </h2>
      <Collection data={data}/>
    </>
  )
}

export default BlogList
