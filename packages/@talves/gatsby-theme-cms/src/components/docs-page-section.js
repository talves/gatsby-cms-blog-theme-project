import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";

const DocsPageSection = (data) => {
console.log(data.parent.body)
  return (
    <>
      <h1>{data.frontmatter && data.frontmatter.title}</h1>
      <h2>
        <Link to={`/${data.internal.type.toLowerCase()}`}>back</Link>
      </h2>
      <MDXRenderer>{data.parent.body}</MDXRenderer>
    </>
  )
}

export default DocsPageSection;
