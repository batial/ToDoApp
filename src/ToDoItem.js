function ToDoItem(props) {
  return (
    <li className="toDoItem" >
      <span className="eraseItem">X</span>
      <p>{props.text}</p>
      {/* <span>V</span> */}
    </li>
  );
}

export { ToDoItem };
