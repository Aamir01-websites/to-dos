import { useState } from "react"

function TaskInput ({tL,setTask}) {
    const [taskTitle,setTaskTitle] = useState('')

    return(
        <div className="mb-4 d-flex gap-2">
            <input type="text" className="form-control" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="Enter New Task"/>
            <button className="btn btn-success" onClick={() => {
                if (taskTitle==='') return ;
                const newTask = {
                    id : Date.now(),
                    title : taskTitle,
                    status : 'incomplete'
                }
                tL.push(newTask)
                setTask(tL)
                localStorage.setItem('taskList',JSON.stringify(tL))
                window.location.reload()
            } } >Add</button>
        </div>
    )
}

export default TaskInput