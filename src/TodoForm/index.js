import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [ newTodoValue, setNewTodoValue ] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = (event) => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To-Do</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Comprar cebollas"
      />
      <div className="TodoFormBtnContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoFormBtn TodoFormBtn-cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoFormBtn TodoFormBtn-add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
