
import { getAllTasks, addTasks, editTasks, deleteTask } from "./FetchTask";
import { useEffect, useState } from 'react';
import MyTasks from './MyTasks';
import PropTypes from 'prop-types';


function Home() {
  const [myTask, setMyTask] = useState([]);
  const [text, setText] = useState("");
  const [editing, setEditing] = useState(false);
  const [taskId, setTaskId] = useState("");
   
    useEffect(() => {
      getAllTasks(setMyTask)
    }, [])

    const updatingInInput = (_id, text) => {
setEditing(true)
setText(text)
setTaskId(_id)
    }
    return (
      <div className ="home">
        <h1>5 Tasks a Day</h1>
       <div className="create">
       <input 
       type="text" 
       placeholder ='Enter Task'
       value={text}
       onChange = {(e) => setText(e.target.value)}
       />
       
       <button
       disabled={!text}
       type="button"
       onClick=
       {editing ? () => editTasks(text, setText, setMyTask, setEditing, taskId)
        :
        () => addTasks(text, setText, setMyTask) }>
        {editing ? "Edit" : "Add"}
       </button>
     
    </div>
        {myTask.map((task) => <MyTasks text={task.text} key={task._id}
        updatingInInput={() => updatingInInput(task._id, task.text)}
        deleteTask={() => deleteTask(task._id, setMyTask)}
        />
      )}
    </div>
    )
  }
  MyTasks.propTypes = {
    text : PropTypes.string,
    updatingInInput : PropTypes.func,
    deleteTask : PropTypes.func,
  
  }
  export default Home