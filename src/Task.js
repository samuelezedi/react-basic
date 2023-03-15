export const Task = (props) => {
    return <div>
         <h1 style={{ color: props.completed ? 'green' : 'black' }}>{props.taskName}</h1>
        <button onClick={() => props.updateTask(props.id)} >Completed</button>
        <button onClick={() => props.deleteTask(props.id)}> X </button>
    </div>
}