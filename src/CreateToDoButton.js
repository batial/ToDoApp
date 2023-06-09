function CreateToDoButton() {
  return (
    <button className="addToDoBtn" onClick={()=>{
      console.log('new todo');
    }}> 
        +
    </button>
  )
}

export {CreateToDoButton};
