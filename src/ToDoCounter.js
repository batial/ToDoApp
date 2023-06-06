function ToDoCounter ({completed,total}){
    return(
      <h1 className="counterText">
        Has completado {completed} de {total} tareas.
      </h1>
    );
}

export {ToDoCounter};