import { useState } from "react";
import { MdOutlineAddComment } from "react-icons/md";
import { useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";

function AddTodo() {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDuedate] = useState("");

  const { addNewItem } = useContext(TodoItemsContext);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDuedate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault(); // Prevent form submit from refreshing the page
    
    addNewItem(todoName, dueDate);
    setTodoName("");
    setDuedate("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success kg-btn"
          >
            <MdOutlineAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

