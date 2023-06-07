function ToDoItem(props) {
  return (
    <li className="toDoItem" >
      <span className="completedItem">V</span>
      <p className={`toDoP ${props.completed && 'toDoItemComplete'}`}>{props.text}</p>
      <span className="eraseItem">X</span>
    </li>
  );
}

export { ToDoItem };
