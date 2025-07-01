// import { useState,useRef } from "react";
import { useRef } from "react";
import { MdOutlineAddComment } from "react-icons/md";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDuedate] = useState("");
  const todoNameElement=useRef();
   const dueDateElement=useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setDuedate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    onNewItem(todoName,dueDate);
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    // setTodoName("");
    // setDuedate("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>

        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" 
          ref={dueDateElement}
          // value={dueDate}
          // onChange={handleDateChange}
           />
        </div>
        <div className="col-2">
          <button
            // type="button"
            className="btn btn-success kg-btn"
            
            // onClick={handleAddButtonClicked}
          >
            <MdOutlineAddComment />
            
          </button>
        </div>

      </form>
    </div>
  );
}

export default AddTodo;


