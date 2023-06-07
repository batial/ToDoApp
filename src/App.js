import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
import React from "react";
import "./index.css";

const defaultToDos = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    completed: true,
  },
  {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    completed: true,
  },
  { text: "Cortar cebolla", completed: true },
];

function App() {
  return (
    <>
      <ToDoCounter completed="2" total="5" />
      <ToDoSearch />
      <ToDoList>
        {defaultToDos.map((todo) => (
          <ToDoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </>
  );
}

export default App;
