function ToDoItem(props) {
  return (
    <li className="toDoItem">
      <span className="completedItem" onClick={props.completeTodo}>
        V
      </span>
      <p className={`toDoP ${props.completed && "toDoItemComplete"}`}>
        {props.text}
      </p>
      <span className="eraseItem" onClick={props.eraseTodo}>X</span>
    </li>
  );
}

export { ToDoItem };
