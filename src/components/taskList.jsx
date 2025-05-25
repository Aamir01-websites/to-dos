import { useState } from "react"
import FilterButtons from "./filterButtons"

function TaskList ({task,setTask}) {  
    const updateStatus = (stat,id) => {
        const progress = stat===1 ? 'completed':'incomplete'
        const updatedTask = task.map(item => item.id === id ? {...item,status:progress}: item)
        setTask(updatedTask)
        localStorage.setItem('taskList',JSON.stringify(updatedTask))
    }

    const todos = task.filter(item => item.status === 'incomplete')
    const completedList = task.filter(item => item.status === 'completed');let emptyArr = {}
    console.log(completedList===emptyArr)
    const [filter,setFilter] = useState(null)

    const todo = todos.map(item => 
        <li key={item.id} className="list-group-item d-flex align-items-center">
            <input type="checkbox" onChange={() => updateStatus(1,item.id)} className="form-check-input me-2" style={{display:filter===item.id?'none':''}}/>
            <span onClick={() => setFilter(item.id)} style={{cursor:'pointer','width':'100%'}}>{item.title}</span>
            {filter===item.id && (<FilterButtons filterClose={setFilter} taskList={task} setTaskList={setTask} taskId={item.id} taskTitle={item.title}/>)}
        </li>
    )

    const cL = completedList.map(item => 
        <li key={item.id} className="list-group-item d-flex align-items-center">
            <input type="checkbox" onChange={() => updateStatus(0,item.id)} className="form-check-input me-2" style={{display:filter===item.id?'none':''}} checked/>
            <span style={{textDecoration:filter===item.id?'':'line-through',cursor:'pointer',width:'100%'}} onClick={() => setFilter(item.id)}>{item.title}</span>
            {filter===item.id && (<FilterButtons filterClose={setFilter} taskList={task} setTaskList={setTask} taskId={item.id} taskTitle={item.title}/>)}
        </li>
    )
    
    return (
        <div>
            <ul className="list-group mb-3">{todo}</ul>
            <div style={{display:completedList===emptyArr?'none':'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h4 className="text-muted">Completed</h4>
                <button className="btn btn-outline-danger mb-3" onClick={() => {
                    setTask(todos)
                    localStorage.setItem('taskList',JSON.stringify(todos))
                }}>Clear all</button>
            </div>
            <ul className="list-group">{cL}</ul>
        </div>
    )
}

export default TaskList