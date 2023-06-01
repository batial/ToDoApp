import './App.css';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';

function App() {
  return (
    <div className="App">
      
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>

        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
      </ToDoList>

      {/* <CreateToDoButton/> */}
    </div>
  );
}

export default App;
