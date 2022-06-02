import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import Addtask from './components/Addtask'

function App() {
  const [tasks,setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      time: '15th February at 2:30 PM',
      reminder: true,

    },
    {
      id: 2,
      text: "Meeting at School",
      time: '16th February at 5:30 PM',
      reminder: false,

    },
    {
      id: 3,
      text: "Shopping",
      time: '18th February at 10:30 AM',
      reminder: true,

    },
    {
      id: 4,
      text: "Dance practice",
      time: '22nd February at 4:30 PM',
      reminder: true,

    }

  ])

  const [showAddtask,setShowAddtask] = useState(false); 

  //add task
  const addTask = (task) =>{
      const id = Math.floor(Math.random() * 10000) + 1;
      const newTask = {id,...task};
      setTasks([...tasks,newTask]);
    
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id? {...task, reminder : !task.reminder} : task))}
  
  //toggleForm
  // const toggleForm = () => {

  // }

  return (
    <div className="container">
      <Header name="Task Tracker" onAdd={()=>{setShowAddtask(!showAddtask)}} showAdd = {showAddtask} />
      {showAddtask &&< Addtask onAdd={addTask} />}
      {(tasks.length > 0)? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>): 'NO TASK TO SHOW'}
    </div>
  );
}

export default App;
