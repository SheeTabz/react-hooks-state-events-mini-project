

import React from "react";

function Task({tasks, handlesDelete}) {
 
  return (
    <> 
   {tasks.map((task,index) => {
    return (  <div key={index}className="task">
    <div className="label">{task.category}</div>
    <div className="text">{task.text}</div>
    <button className="delete" onClick={() => handlesDelete(index)}>X</button>
  </div>)
   })
  }
  </>
  );
}

export default Task;