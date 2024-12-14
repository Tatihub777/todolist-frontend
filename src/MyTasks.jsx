import PropTypes from 'prop-types';

import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";

const MyTasks = ({text, updatingInInput, deleteTask }) => {
  return (
    <div className="myTasks">
       

        <div>
           <p>{text}</p>
        </div>
        <div>
         <MdOutlineEdit onClick={updatingInInput} />   
        </div>
      <div>
        <MdOutlineDeleteForever onClick={deleteTask} />
      </div>
      
    </div>
    
  )

}

MyTasks.propTypes = {
  text : PropTypes.node,
  updatingInInput : PropTypes.node,
  deleteTask : PropTypes.node,

}
export default MyTasks
