import React from "react";
import { TaskIcon } from ".";

function DeleteIcon({ eraseTodo }) {
  return <TaskIcon type="delete" action={eraseTodo} />;
}

export { DeleteIcon };
