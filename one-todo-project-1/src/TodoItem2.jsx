function TodoItem2() {
  let todoItem = "Go to College";
  let tododate = "14/9/2024";

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoItem}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-btn">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;

