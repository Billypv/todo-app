// import TaskList from './TaskList'
function Tasks(props){

    return(
        <div>
            <h2>Tasks - Owner {`${props.currentOwner.id} ${props.currentOwner.name}`}</h2>
            <div>
                {/* <TaskList owners={props.owners} tasks={props.tasks} setTasks={props.setTasks} currentOwner={props.currentOwner}/> */}

            </div>
        </div>
    )
}
export default Tasks