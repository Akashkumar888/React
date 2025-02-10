function TodoItem1() {
  let todoItem = "Buy Milk";
  let tododate = "4/10/2024";

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

export default TodoItem1;
