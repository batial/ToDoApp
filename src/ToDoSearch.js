import React from "react";

function ToDoSearch ({
  searchValue,
  setSearchValue
}){
  


    return(
      <input className="searchInput" value={searchValue} placeholder="Cortar cebolla" onChange={(event)=>{
        setSearchValue(event.target.value);
      }}/>
    );
}

export {ToDoSearch};