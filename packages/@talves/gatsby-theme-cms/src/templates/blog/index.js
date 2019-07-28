import React from "react";
import { graphql } from "gatsby";
import Collection from "../../components/blog-list";
import Extra from "../../components/extra-json";

/*
  Query here allows for shadowing components
*/
export const query = graphql`
  query BlogCollection {
    allBlog {
      nodes {
        ...BlogListSection
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
