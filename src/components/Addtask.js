import React from 'react'
import {useState} from 'react'

const Addtask = ({onAdd}) => {
    const [text,setText] = useState('');
    const [time,setTime] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit = e =>{
        e.preventDefault();

        if(!text)
        {
            alert('Please enter a task');
            return;
        }

        onAdd({text,time,reminder});

        setText('');
        setTime('');
        setReminder(false);
    }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="task">Task</label>
            <input type="text" id="task" placeholder="Add Task" 
            value={text} 
            onChange={e=>{setText(e.target.value)}}/>
        </div>
        <div className="form-control">
            <label htmlFor="time">Date and Time</label>
            <input type="text" id="time" placeholder="Add Date and Time"
            value={time} 
            onChange={e=>{setTime(e.target.value)}}/>
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="reminder">Reminder</label>
            <input type="checkbox" id="reminder" 
            value={reminder}  
            checked={reminder}
            onChange={e=>{setReminder(e.currentTarget.checked)}}/>
        </div>
      
        <button className="btn btn-block">Save</button>
    </form>
  )
}

export default Addtask