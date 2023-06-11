import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
import React from "react";
import "./index.css";

/* const defaultToDos = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    completed: true,
  },
  {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    completed: 1,
  },
  { text: "Cortar cebolla", completed: false },
]; */

/* localStorage.setItem('tasks_v1', defaultToDos);
 */
/* localStorage.removeItem('tasks_v1'); */

function App() {
  //get previous todos from localStorage
  const localStorageTodos = localStorage.getItem("tasks_v1");
  let parsedTodos;

  if (localStorageTodos) {
    parsedTodos = JSON.parse(localStorageTodos);
  } else {
    localStorage.setItem("tasks_v1", JSON.stringify([]));
    parsedTodos = [];
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const textItem = todo.text.toLocaleLowerCase();
    const searchedText = searchValue.toLocaleLowerCase();
    return textItem.includes(searchedText);
  });

  //save tasks in localStorage and update the state
  const saveTodos = (newTodos) => {
    localStorage.setItem('tasks_v1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => {
      return todo.text === text;
    });
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const eraseTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => {
      return todo.text === text;
    });
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <ToDoCounter completed={completedTodos} total={totalTodos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList>
        {searchedTodos.map((todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            completeTodo={() => completeTodo(todo.text)}
            eraseTodo={() => eraseTodo(todo.text)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </>
  );
}

export default App;
