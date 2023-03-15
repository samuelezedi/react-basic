
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
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    };
    const newTodoList = [...todoList,task];
    setTodoList(newTodoList);
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    });
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
          return <div>
            <h1>{task.taskName}</h1>
            <button onClick={() => deleteTask(task.id)}> X </button>
          </div> 
        })}
      </div>
    </div>
  );
}



export default App;
