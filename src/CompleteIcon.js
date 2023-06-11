import React from "react";
import { TaskIcon } from "./TaskIcon";
import './icons.css'

function CompleteIcon({completed, completeTodo}) {
  return <TaskIcon className="iconCheck" type="check" action={completeTodo} color={completed ? 'green' : 'gray'} />;
}

export { CompleteIcon };
