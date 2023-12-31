import React, { ChangeEvent, useState } from 'react'
import { AddTaskButton, AddTaskWrapper } from '../styledComponent'
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';
import {  ITaskDetails } from '../ducks/types';

export interface IPropsAddTask{
  tasks:Array<ITaskDetails>,
  setTasks: (e:any)=> void
}

function AddTask({tasks, setTasks}:IPropsAddTask) {
  const [task, setTask] = useState<ITaskDetails>({
    id:'',
    name:'',
    description:'',
    dueDate:'',
    status:'To Do'
  })

  const { name, description, dueDate } = task
  
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { name, value }:any= event.target
    setTask({...task, [name]:value, id:uuid()})
  }

  const handleSubmit = (event:ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(task?.name.length < 3) return toast.error('A task must be more than 3 characters.')
      
    if(task?.name.length > 100) return toast.error('A task must not be more than 100 characters.')
     
    setTasks((prev:Array<ITaskDetails>) => {
      let list ;
      if(!prev){
        list = [ task]
      }else{
        list = [...prev, task]
      }

      if(list)
      localStorage.setItem('tasks', JSON.stringify(list))
      return list
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <AddTaskWrapper>
      <input 
        type="text"
        name="name"
        value={name}
        placeholder='Task Name'
        className='border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1'
        onChange={handleChange}
        required
      />
      <input 
        type="text"
        name="description"
        value={description}
        placeholder='Task Description'
        className='border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1'
        onChange={handleChange}
        required
      />
       <input 
        type="date"
        name="dueDate"
        value={dueDate}
        placeholder='Due Date'
        className='border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1'
        onChange={handleChange}
      />
      <AddTaskButton type='submit'>  Add Task </AddTaskButton>
      </AddTaskWrapper>
    </form>
  )
}

export default AddTask