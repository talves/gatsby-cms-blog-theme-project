import React from 'react'
import { graphql, Link } from 'gatsby'
import Collection from './collection'

export const fragment = graphql`
fragment DocsCollection on Docs {
  parent {
    ... on Mdx {
      id
      body
    }
  }
  frontmatter {
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

const DocsList = ({ data }) => {
  return (
    <>
      <h2>
        <Link to={`/`}>Home</Link>
      </h2>
      <Collection data={data}/>
    </>
  )
}

export default DocsList
