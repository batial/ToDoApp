import React from "react";
import "./EmptyTodos.css";
import { FaArrowRight } from "react-icons/fa";


function EmptyTodos() {
  return <p className="emptyTodosAlert">Crea una tarea <span className="arrowIcon"> < FaArrowRight/></span> </p>;
}

export { EmptyTodos };
