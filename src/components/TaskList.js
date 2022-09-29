
import React from "react";
import Task from "./Task";

function TaskList({categories, tasks, handlesDelete}) {
  console.log(categories, tasks)
  // function handlesDelete(index){
  //   if(index === tasks.category){
  //     return 
  //   }
  // }
  return (
    <div className="tasks">
      <Task tasks={tasks} handlesDelete={handlesDelete}/>
    </div>
  );
}

export default TaskList;