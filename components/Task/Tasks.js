import Link from "next/link";
import React, { Fragment } from "react";
import Task from "./Task";

export default function Tasks({ tasks }) {
  return (
    <Fragment>
      {tasks.map((task, idx) => (
        <li key={idx}>
          <Task id={task.id} description={task.description} tags={task.tags} />
        </li>
      ))}
      <Link href="/auth/logout">
        <a>logout</a>
      </Link>
    </Fragment>
  );
}
