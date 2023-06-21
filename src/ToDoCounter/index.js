import React from "react";
import { TodoContext } from "../TodoContext";

function ToDoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  let message = `Has completado ${completedTodos} de ${totalTodos} tareas.`;
  return <h1 className="counterText">{message}</h1>;
}

export { ToDoCounter };
