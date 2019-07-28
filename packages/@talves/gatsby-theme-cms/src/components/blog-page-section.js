import React from "react";
import Markdown from "react-markdown";
import { Link } from "gatsby";

const BlogPageSection = (data) => {
  return (
    <>
    <h1>{data.frontmatter && data.frontmatter.title}</h1>
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <Markdown>{data.rawBody}</Markdown>
    </>
  )
}

export default BlogPageSection;
