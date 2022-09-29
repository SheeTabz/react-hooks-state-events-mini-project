import React, {useState} from "react";

function CategoryFilter({categories, handlesFilter}) {
  
  const [isActive, setIsActive] =useState(false)
   function handlesClick(category,index){
    setIsActive(current  => !current)
    handlesFilter(category)
  }

  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => {
        return <button key={index} className={isActive ? 'selected': ''} onClick={()=>handlesClick(category)}>{category}</button>
       })}
    </div>
  );
}

export default CategoryFilter;