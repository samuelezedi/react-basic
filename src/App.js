
import './App.css';
// import { User } from './User';
import { Task } from './Task';
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
      taskName: newTask,
      completed: false
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

  const updateTask = (id) => {
    const newTodoList = todoList.map((task) => {
      if(id === task.id) {
        return {...task, completed:true}
      }
      return task;
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
          return <Task taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} updateTask={updateTask} />
        })}
      </div>
    </div>
  );
}



export default App;
