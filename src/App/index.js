import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";
import React from "react";
import "../index.css";

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
  const {item : todos, saveItem : saveTodos, loading, error} = useLocalStorage("tasks_v1", [
    { text: "cortar cebolla", completed: false },
    { text: "jugar al switch", completed: true },
  ]);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const textItem = todo.text.toLocaleLowerCase();
    const searchedText = searchValue.toLocaleLowerCase();
    return textItem.includes(searchedText);
  });

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
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      eraseTodo={eraseTodo}
    />
  );
}

export default App;
