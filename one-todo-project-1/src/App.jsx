import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItem1 from "./TodoItem1";
import TodoItem2 from "./TodoItem2";

function App() {
  return (
    <div className="todo-container text-center"> {/* Removed <center>, replaced with Bootstrap */}
      <AppName />
      <AddTodo />
      <div className="Item-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </div>
  );
}

export default App;
