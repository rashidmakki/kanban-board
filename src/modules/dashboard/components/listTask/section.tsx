import React from 'react'
import Header from './header'
import Task from './task'
import { IAddTask } from '../addTask'

function Section({status, todos, inProgress, completed, tasks, setTasks}:any){
    let taskMap = todos
    let bg = 'bg-slate-500'

    if(status === 'In Progress'){
      taskMap = inProgress
      bg= 'bg-purple-500'
    }else if (status === 'Completed'){
      taskMap = completed
      bg = 'bg-green-500'
    }
    
  return(
    <div className='w-64'>
      <Header
      text={status}
      count={taskMap.length}
      bg={bg} />
      {
        taskMap.length > 0 && taskMap.map((task:IAddTask)=> (
            <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks }/>
        )) 
      }
    </div>
  )
}

export default Section