import "./CreateToDoButton.css"

function CreateToDoButton({setOpenModal}) {
  return (
    <button className="addToDoBtn" onClick={()=>{
      setOpenModal(state => !state);
    }}> 
        +
    </button>
  )
}

export {CreateToDoButton};
