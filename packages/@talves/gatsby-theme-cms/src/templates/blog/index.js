import React from "react";
import { graphql } from "gatsby";
import Collection from "../../components/blog-list";
import Extra from "../../components/extra-json";

/*
  Query here allows for shadowing components
  In this case, you would shadow gatsby-theme-cms/components/blog-list.js
*/
export const query = graphql`
  query {
    allBlog {
      nodes {
        ...BlogCollection
      }
    }
  }
`;

const Blog = props => {
  const { data } = props;
  const pageData = {
    data: data.allBlog.nodes
  };
  return (
    <>
      <Collection {...pageData} />
      <Extra {...props} />
    </>
  );
};

export default Blog;
