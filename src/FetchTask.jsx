import axios from 'axios';

const getAllTasks = (setMyTask) => {
   axios.get("https://todo-list-backend-2-7i0j.onrender.com")
   .then(({data}) => {console.log(data)
      setMyTask(data)
   })
}

const addTasks = (text, setText, setMyTask) => {
   axios.post("https://todo-list-backend-2-7i0j.onrender.com/addTask", {text})
   .then(({data}) => {(console.log(data))
      setText("")
      getAllTasks(setMyTask)

   })
}

const editTasks = (text, setText, setMyTask, setEditing, taskId) => {
   axios.put("https://todo-list-backend-2-7i0j.onrender.com/editTask", {_id: taskId, text})
   .then(({data}) => {(console.log(data))
      setText("")
      setEditing(false)
      getAllTasks(setMyTask)

   })
}

const deleteTask = (_id, setMyTask ) => {
   axios.post("https://todo-list-backend-2-7i0j.onrender.com/deleteTask", {_id})
   .then(({data}) => {console.log(data)
      getAllTasks(setMyTask)
   })
   
}   
   export { getAllTasks, addTasks, editTasks, deleteTask };