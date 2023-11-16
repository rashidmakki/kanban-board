import React,{useEffect, useState} from 'react'
import Nav from './components/nav'
import AddTask from './components/addTask'
import { Toaster } from 'react-hot-toast';
import ListTasks from './components/listTask/listTasks';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function KanbanDashboard() {
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    setTasks(JSON.parse(localStorage.getItem("tasks") as string))
  },[])
  return (
    <DndProvider backend={HTML5Backend}>
     <Toaster />
     <div>
        <Nav/>
        <AddTask tasks={tasks} setTasks={setTasks}/>
        <ListTasks tasks={tasks} setTasks={setTasks} />
     </div>
    </DndProvider>
  )
}

export default KanbanDashboard