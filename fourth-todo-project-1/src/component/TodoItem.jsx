

function TodoItem({ todoName, todoDate,onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row align-items-center">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-btn"
          
          onClick={(event)=>onDeleteClick(todoName) }>
            Delete 

          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;


