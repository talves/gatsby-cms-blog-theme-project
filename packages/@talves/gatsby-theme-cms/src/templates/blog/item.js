import React from 'react'
import { graphql } from 'gatsby'
import Page from '../../components/blog-page-section'
import Extra from '../../components/extra-json'

/*
  Query here allows for shadowing components
*/
export const query = graphql`
query ($id: String!) {
  blog(id: {eq: $id}) {
    ...BlogListSection
  }
}
`

const BlogItem = (props) => {
  const { data } = props
  const pageData = {
    ...data.blog,
  }
  return (
    <>
      <Page {...pageData} />
      <Extra {...props} />
    </>
  )
}

export default BlogItem
