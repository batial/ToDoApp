function ToDoList (props){
    return(
      <ul className="toDoList">
        {props.children}
      </ul>
    );
}

export {ToDoList};