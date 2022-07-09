import axios from "axios";
import React, { Fragment, useState } from "react";
import Tags from "../Tags/Tags";

export default function Task({ id, description, tags }) {
  const [desc, setDesc] = useState(description);
  let handleOnChange = (e) => {
    setDesc(e.target.value);
  };
  let handleOnBlur = async () => {
    await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`,
      {
        description: desc,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };
  return (
    <Fragment>
      <input value={desc} onChange={handleOnChange} onBlur={handleOnBlur} />
      <Tags tags={tags} />
    </Fragment>
  );
}
