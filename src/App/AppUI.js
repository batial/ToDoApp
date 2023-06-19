import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { CreateToDoButton } from "../CreateToDoButton";

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  eraseTodo,
}) {
  return (
    <>
      <ToDoCounter completed={completedTodos} total={totalTodos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

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
