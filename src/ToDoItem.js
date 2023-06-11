import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

function ToDoItem({completed, text, completeTodo, eraseTodo}) {
  return (
    <li className="toDoItem">
      <CompleteIcon completeTodo={completeTodo} completed={completed}/>
      <p className={`toDoP ${completed && "toDoItemComplete"}`}>
        {text}
      </p>
      <DeleteIcon eraseTodo={eraseTodo} completed={completed}/>
    </li>
  );
}

export { ToDoItem };
