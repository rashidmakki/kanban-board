import React from 'react'
import { IAddTask } from '../addTask'
import { Img } from '../../styledComponent'
import toast from 'react-hot-toast'

interface ITask{
    task:IAddTask,
    tasks: Array<IAddTask>,
    setTasks: (e:any) => void
}
function Task({task,tasks, setTasks}: ITask) {
  const handleRemove = (taskId:string) => {
    const filterTask = tasks.filter( (task:IAddTask) =>  task.id !== taskId)
    setTasks(filterTask)
    toast("Task removed")
  }
  return (
    <div className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab`}>
     <p> Name : {task.name}</p>
     <p> Description:  {task.description} </p>
     <p> Due Date : {task.dueDate} </p>
     <button 
       className='absolute w-5 h-5 bottom-1 right-1 text-slate-400'
       onClick={()=> handleRemove(task.id)}
      >
        <Img src='/images/remove.svg' alt='remove' />
     </button>

    </div>
  )
}

export default Task