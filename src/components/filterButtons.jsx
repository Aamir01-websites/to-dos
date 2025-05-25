function FilterButtons({filterClose,taskList,setTaskList,taskId,taskTitle}) {
    return (
        <div className="btn-group" style={{gap:'5px'}}>
            <button className="btn btn-outline-primary btn-sm me-2" onClick={() => {
                let editedTask = prompt("Enter the task to-do :",taskTitle)
                if (editedTask!==null) {
                    const updatedList = taskList.map(item => item.id === taskId ? {...item,title:editedTask}:item)
                    setTaskList(updatedList)
                    localStorage.setItem('taskList',JSON.stringify(updatedList))
                }
            }}>✎</button>
            <button className="btn btn-outline-danger btn-sm me-2" onClick={() => {
                const updatedList = taskList.filter(item => item.id !== taskId)
                setTaskList(updatedList)
                localStorage.setItem('taskList',JSON.stringify(updatedList))
            }}><i className="fas fa-trash"></i></button>
            <button className="btn btn-outline-secondary btn-sm" onClick={() => {
                filterClose()
            }}>&times;</button>
        </div>
    )
}

export default FilterButtons