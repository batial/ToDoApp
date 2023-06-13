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

function useLocalStorage(itemName , initialValue) {
  const localStorageItem = localStorage.getItem({itemName});

  let parsedItem;

  if (localStorageItem) {
    parsedItem = JSON.parse(localStorageItem);
  } else {
    localStorage.setItem(itemName, JSON.stringify([initialValue]));
    parsedItem = [initialValue];
  }

  const [item , setItem] = React.useState(parsedItem);

  //save tasks in localStorage and update the state
  const saveItem = (newItem) => {
    localStorage.setItem("tasks_v1", JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item , saveItem];
}

function App() {
  //get previous todos from localStorage

  const [todos, saveTodos] = useLocalStorage('tasks_1', []);
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
