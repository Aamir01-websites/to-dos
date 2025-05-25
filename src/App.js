import TaskLogin from "./components/taskLogin";
import TaskInput from "./components/taskInput";
import TaskList from "./components/taskList";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const login = localStorage.getItem('login') !== 'true'

  const taskList = JSON.parse(localStorage.getItem('taskList'))
  const [tasks,setTasks] = useState(taskList)

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
      {login ? <TaskLogin /> : <>
        <h1 className="display-6 text-center mb-4">TO-DOs</h1>
        <TaskInput tL={taskList} setTask={setTasks}/>
        <TaskList task={tasks} setTask={setTasks}/></>
      }
      </div>
    </div>
  );
}

export default App;
