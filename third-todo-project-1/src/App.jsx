

import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";

import "./apnabhai.css"
function App() {
  
  const todoItems=[
    {
      name: "Buy Milk",
      dueDate: "4/10/2024",
  },
  {
    name: "Go to college",
    dueDate: "4/10/2024" ,
 },
 {
  name: "like the video",
  dueDate: "Right now" ,
},
];

  return (
    <div className="todo-container text-center"> {/* Bootstrap-centered container */}
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </div>
  );
}

export default App;
