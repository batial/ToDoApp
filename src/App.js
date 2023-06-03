import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import React from 'react';

const defaultToDos = [
  { text : 'Cortar cebolla' , completed : true},
  { text : 'Cantar bad bunny' , completed : true}
]

function App() {
  return (
    <React.Fragment>
      
      <ToDoCounter completed="2" total="5" />
      <ToDoSearch />
      <ToDoList>

        {defaultToDos.map(todo =>(
          <ToDoItem key={todo.text} text={todo.text} />
        ))}

      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
