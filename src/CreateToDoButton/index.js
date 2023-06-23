import "./CreateToDoButton.css";
import { FaPlus } from "react-icons/fa";


function CreateToDoButton({setOpenModal}) {
  return (
    <button className="addToDoBtn" onClick={()=>{
      setOpenModal(state => !state);
    }}> 
        <FaPlus/>
    </button>
  )
}

export {CreateToDoButton};
