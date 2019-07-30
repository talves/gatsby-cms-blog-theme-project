import React from "react";
import Markdown from "react-markdown";
import { Link } from "gatsby";

const DocsPageSection = (data) => {
  return (
    <>
    <h1>{data.frontmatter && data.frontmatter.title}</h1>
      <h2>
        <Link to={`/${data.internal.type.toLowerCase()}`}>back</Link>
      </h2>
      <Markdown>{data.rawBody}</Markdown>
    </>
  )
}

export default DocsPageSection;
