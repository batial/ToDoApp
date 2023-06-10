function ToDoCounter ({completed,total}){
  let message = `Has completado ${completed} de ${total} tareas.`
  if (completed === total ){
    message = 'Felicidades, ¡completaste todas las tareas!🥳';
  }
    return(
      <h1 className="counterText">
        {message}
      </h1>
    );
}

export {ToDoCounter};