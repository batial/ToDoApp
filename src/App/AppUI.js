import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { CreateToDoButton } from "../CreateToDoButton";
import { TodoContext } from "../TodoContext";

function AppUI() {
  return (
    <>
      <ToDoCounter />
      <ToDoSearch />
      <TodoContext.Consumer>
        {({ loading, error, searchedTodos, completeTodo, eraseTodo }) => (
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
        )}
      </TodoContext.Consumer>
      <CreateToDoButton />
    </>
  );
}

export { AppUI };
