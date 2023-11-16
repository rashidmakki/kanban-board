import React,{useState, useEffect} from 'react'
import Section from './section'
import { IAddTask } from '../../ducks/types'

interface IPropsListTasks{
    tasks:Array<IAddTask>,
    setTasks: (e:any)=> void
}

function ListTasks({tasks, setTasks}:IPropsListTasks) {
  const [ todos, setTodos ] = useState<Array<IAddTask>>([])
  const [ inProgress, setInProgress] = useState<Array<IAddTask>>([])
  const [ completed, setCompleted ] = useState<Array<IAddTask>>([])
  
  useEffect(()=>{
    if(tasks){
    const filterTodosTask = tasks.filter((task:IAddTask) => task.status === 'To Do')
    const filterInProgressTask = tasks.filter((task:IAddTask) => task.status === 'In Progress')
    const filterCompletedTask = tasks.filter((task:IAddTask) => task.status === 'Completed')
   
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