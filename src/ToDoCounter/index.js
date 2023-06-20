function ToDoCounter({ completed, total }) {
  let message = `Has completado ${completed} de ${total} tareas.`;
  return <h1 className="counterText">{message}</h1>;
}

export { ToDoCounter };
