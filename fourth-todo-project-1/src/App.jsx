import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";

import "./apnabhai.css";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";
function App() {
  const [todoItems, setTodoItems] = useState([]);



  const handleNewItem = (itemName, itemDueDate) => {
    // Multi-line arrow function
    // setTodoItems((currentValue)=>{
    //  const newTodoItems = [
    //   ...currentValue,
    //   { name: itemName, dueDate: itemDueDate },
    // ];
    // return newTodoItems;
    // });

    // you can remove the {} and return if your function is a single return expression.
    // ✅ Version 2: Single-line return (cleaner)
    setTodoItems((currentValue)=>[
      ...currentValue,
      { name: itemName, dueDate: itemDueDate },
    ]);

  };


const handleDeleteItem=(todoItemName)=>{
  const newTodoItems=todoItems.filter(item=>(item.name !==  todoItemName));
  setTodoItems(newTodoItems);
}

  return (
    <div className="todo-container text-center">
      {" "}
      {/* Bootstrap-centered container */}
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <WelcomeMessage  todoItems={todoItems}   />

      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} ></TodoItems>
      
    </div>
  );
}


export default App;

