import { CompleteIcon } from "../TaskIcon/CompleteIcon";
import { DeleteIcon } from "../TaskIcon/DeleteIcon";

function ToDoItem({ completed, text, completeTodo, eraseTodo }) {
  return (
    <li className="toDoItem">
      <CompleteIcon completeTodo={completeTodo} completed={completed} />
      <p className={`toDoP ${completed && "toDoItemComplete"}`}>{text}</p>
      <DeleteIcon eraseTodo={eraseTodo} completed={completed} />
    </li>
  );
}

export { ToDoItem };
