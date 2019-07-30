import React from "react";
import { Link } from "gatsby";

const Collection = ({ data }) => {
  return (
    <ul>
    {data &&
      data.map((item, key) => {
        return (
          <li key={key}>
            <Link to={`/${item.internal.type.toLowerCase()}/${item.name}`}>
              {item.frontmatter.title}
            </Link>
          </li>
        );
      })}
    </ul>
);
};

export default Collection;
