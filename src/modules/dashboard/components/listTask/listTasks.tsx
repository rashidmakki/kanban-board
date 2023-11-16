import React,{useState, useEffect} from 'react'
import Section from './section'
import { ITaskDetails } from '../../ducks/types'

interface IPropsListTasks{
    tasks:Array<ITaskDetails>,
    setTasks: (e:any)=> void
}

function ListTasks({tasks, setTasks}:IPropsListTasks) {
  const [ todos, setTodos ] = useState<Array<ITaskDetails>>([])
  const [ inProgress, setInProgress] = useState<Array<ITaskDetails>>([])
  const [ completed, setCompleted ] = useState<Array<ITaskDetails>>([])
  
  useEffect(()=>{
    if(tasks){
    const filterTodosTask = tasks.filter((task:ITaskDetails) => task.status === 'To Do')
    const filterInProgressTask = tasks.filter((task:ITaskDetails) => task.status === 'In Progress')
    const filterCompletedTask = tasks.filter((task:ITaskDetails) => task.status === 'Completed')
   
    setTodos(filterTodosTask)
    setInProgress(filterInProgressTask)
    setCompleted(filterCompletedTask)
    }
},[tasks])
   
  const status = ['To Do', 'In Progress', 'Completed']
  return (
    <div className='flex gap-16 w-full justify-center align-center p-8'>
     {
        status.map((status,index)=>(
          <Section
            key={index} 
            status={status}
            todos={todos}
            inProgress={inProgress}
            completed={completed}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))
     }
    </div>
  )
}


export default ListTasks