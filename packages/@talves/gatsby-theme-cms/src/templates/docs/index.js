import React from "react";
import { graphql } from "gatsby";
import Collection from "../../components/docs-list";
import Extra from "../../components/extra-json";

/*
  Query here allows for shadowing components
  In this case, you would shadow gatsby-theme-cms/components/blog-list.js
*/
export const query = graphql`
  query {
    allDocs {
      nodes {
        ...DocsCollection
      }
    }
  }
`;

const Docs = props => {
  const { data } = props;
  const pageData = {
    data: data.allDocs.nodes
  };
  return (
    <>
      <Collection {...pageData} />
      <Extra {...props} />
    </>
  );
};

export default Docs;
