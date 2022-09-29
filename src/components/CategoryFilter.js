import React from "react";

function CategoryFilter({categories, handlesFilter}) {
  
  // const [isActive, setIsActive] =useState(false)
  //  function handlesClick(){
  //   setIsActive(isActive  => !isActive)
  //   handlesFilter()
  // }

  // className={isActive ? 'selected': ''} onClick={handlesClick}
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return <button onClick={()=> handlesFilter(category)}>{category}</button>
       })}
    </div>
  );
}

export default CategoryFilter;