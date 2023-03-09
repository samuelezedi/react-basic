
import './App.css';
// import { User } from './User';
// import { Planet } from './Planet';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInput = (event) => {
    setNewTask(event.target.value);
  }

  const handleTodoList = () => {
    const newTodoList = [newTask,...todoList];
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <div className="inputs">
        <input onChange={handleInput} />
        <button onClick={handleTodoList}> Add Task </button>
      </div>
      <div className="list">
        {todoList.map((task, key) => {
          return <h1>{task}</h1>
        })}
      </div>
    </div>
  );
}





export default App;
