import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  //get previous todos from localStorage
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("tasks_v1", [
    { text: "cortar cebolla", completed: false },
    { text: "jugar al switch", completed: true },
  ]);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const textItem = todo.text.toLocaleLowerCase();
    const searchedText = searchValue.toLocaleLowerCase();
    return textItem.includes(searchedText);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      completed: false,
    });
    saveTodos(newTodos);
  };
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
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        eraseTodo,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
