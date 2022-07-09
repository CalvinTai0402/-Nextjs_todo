import React, { Fragment } from "react";
import Tag from "./Tag";

export default function Tags({ tags }) {
  return (
    <Fragment>
      {tags.length > 0 ? " Tags:" : ""}
      {tags.map((tag, idx) => (
        <Tag key={idx} description={tag.description + "|"} />
      ))}
    </Fragment>
  );
}
