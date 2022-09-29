import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [items,setItems] = useState([])

function handlesDelete(index){
  console.log("Delete",{index})
 const updateList = TASKS.filter((tasks, i) => i !== index)
 setItems(updateList);
}
// FUNCTION THAT HANDLES FILTER
function handlesFilter(category){
  const filter = TASKS.filter((task) => (
    task.category === category
    ))
  setItems(filter);
}
// const filterItems = TASKS.filter(tasks => {
//   if(tasks.category === "All"){
//     return true;
//   }
//   else{
//     return tasks.category === category;
//   }
// } )
// HANDLES A NEW ITEM
function onTaskFormSubmit(newItem){
  console.log(newItem)
  const newList = [...items,newItem]
  setItems(newList);
}
 

useEffect(() => setItems(TASKS),[])
console.log(items)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handlesFilter={handlesFilter}/>
      <NewTaskForm categories={CATEGORIES} tasks={items} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList categories={CATEGORIES} tasks={items} handlesDelete={handlesDelete}/>
    </div>
  );
}

export default App;