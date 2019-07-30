import React from 'react'
import { graphql } from 'gatsby'
import Page from '../../components/docs-page-section'
import Extra from '../../components/extra-json'

/*
  Query here allows for shadowing components
*/
export const query = graphql`
query ($id: String!) {
  docs(id: {eq: $id}) {
    ...DocsCollection
  }
}
`

const DocsItem = (props) => {
  const { data } = props
  const pageData = {
    ...data.docs,
  }
  return (
    <>
      <Page {...pageData} />
      <Extra {...props} />
    </>
  )
}

export default DocsItem
