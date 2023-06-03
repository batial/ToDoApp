import './App.css';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';


function App() {
  return (
    <div className="App">
      
      <ToDoCounter completed="2" total="5" />
      <ToDoSearch />
      <ToDoList>

        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
      </ToDoList>

      <CreateToDoButton />
    </div>
  );
}

export default App;
