import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  eraseTodo}
) {
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

export { AppUI };
