function TaskLogin() {
    return(
        <div className="text-center" style={{height:'100%',alignItems:'center'}}>
            <h1 className="mb-4">Hi I'm Aamir , and this is my simple To-Do app</h1>
            <h2 className="mb-5">Your PRODUCTIVITY companion</h2>
            <button className="btn btn-primary" onClick={() => {
                localStorage.setItem('login','true')
                localStorage.setItem('taskList',JSON.stringify([{id:0,title:'Read Books',status:'incomplete'},{id:1,title:'Brush',status:'completed'}]))
                window.location.reload()
            }}>Get Started &rarr;</button>
        </div>
    )
}

export default TaskLogin