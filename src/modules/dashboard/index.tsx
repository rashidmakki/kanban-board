import React,{useState} from 'react'
import Nav from './components/nav'
import AddTask from './components/addTask'
import { Toaster } from 'react-hot-toast';
import ListTasks from './components/listTask/listTasks';


function KanbanDashboard() {
  const [tasks, setTasks] = useState([])
  return (
    <>
     <Toaster />
     <div>
      <Nav/>
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <ListTasks tasks={tasks} setTasks={setTasks} />
     </div>
    </>
  )
}

export default KanbanDashboard