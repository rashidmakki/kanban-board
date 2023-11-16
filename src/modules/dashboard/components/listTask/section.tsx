import React from 'react'
import Header from './header'
import Task from './task'
import { IAddTask } from '../../ducks/types'
import {useDrop}  from 'react-dnd'
import toast from 'react-hot-toast'

function Section({status, todos, inProgress, completed, tasks, setTasks}:any){
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item:any)=> addItemToSection(item.id),
    collect: (monitor:any) => ({
      isOver: !!monitor.isOver()
    })
  }))
  
    let taskMap = todos
    let bg = 'bg-slate-500'

    if(status === 'In Progress'){
      taskMap = inProgress
      bg= 'bg-sky-500'
    }else if (status === 'Completed'){
      taskMap = completed
      bg = 'bg-green-500'
    }
    
  const addItemToSection = (taskId:string) => {
   setTasks((prev:Array<IAddTask>)=>{
     const modifyTask = prev.map((t:IAddTask)=>{
        if( t.id === taskId){
          return { ...t, status:status}
        }
        return t
     })

     localStorage.setItem("tasks", JSON.stringify(modifyTask))

     toast("task status changed")
    return modifyTask
   })
  }
  return(
    <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-200" : ""}`}>
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