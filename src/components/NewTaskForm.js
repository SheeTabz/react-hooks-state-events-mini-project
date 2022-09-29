import React,{useState} from "react";


function NewTaskForm({categories, onTaskFormSubmit}) {
  // 
  const [formInput,setForm] = useState({
    text : '',
    category : 'All'
  })
  function handlesChange(e){
    const value = e.target.value
    const name = e.target.name
    const newList = {...formInput,
      [name] : value,
    }
    setForm(newList)
  }
  function handlesSubmit(e){
        e.preventDefault()
        onTaskFormSubmit(formInput)
        
  }
console.log(formInput)
 
const category = categories.filter(c => c !== "All")
// console.log(category)
  return (
    <form className="new-task-form" onSubmit={handlesSubmit}>
      <label>
        Details
        <input type="text"
         name="text"
         value={formInput.text} 
         onChange={handlesChange}/>
      </label>
      <label>
        Category
        <select name="category"
         value={formInput.category} 
         onChange={handlesChange}
        >
          {category.map((category, index) => {
            return <option  key={index} value={category}>{category}</option>
          })}
          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;