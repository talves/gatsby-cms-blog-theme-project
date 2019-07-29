import React from 'react'
import { graphql, Link } from 'gatsby'

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
        <Link to="/">Home</Link>
      </h2>
      <ul>
        {data &&
          data.map(item => {
            return (
              <li>
                <Link to={`/${item.internal.type.toLowerCase()}/${item.name}`}>{item.frontmatter.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  )
}

export default BlogList
