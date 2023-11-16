import React from 'react'
import { Img } from '../../styledComponent'
import toast from 'react-hot-toast'
import { IAddTask } from '../../ducks/types'
import {useDrag} from 'react-dnd'

interface ITask {
    task:IAddTask,
    tasks: Array<IAddTask>,
    setTasks: (e:any) => void
}

function Task({task,tasks, setTasks}: ITask) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor:any) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const handleRemove = (taskId:string) => {
    const filterTask = tasks.filter( (task:IAddTask) =>  task.id !== taskId)
    setTasks(filterTask)
    localStorage.setItem("tasks", JSON.stringify(filterTask))
    toast("Task removed")
  }
  return (
    <div ref={drag} className={`relative p-4 mt-8 shadow-md rounded-md ${isDragging ? "opacity-25":"opacity-100"} cursor-grab`}>
     <p> Name : {task.name}</p>
     <p> Description:  {task.description} </p>
     <p> { task.dueDate ? `Due Date : ${task.dueDate}` : '' } </p>
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