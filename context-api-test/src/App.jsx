import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";

import "./apnabhai.css";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";

import TodoItemsContext from "./store/todo-items-store";
function App() {
  const [todoItems, setTodoItems] = useState([]);



  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currentValue)=>[
      ...currentValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  setTodoItems(newTodoItems);
  };


const deleteItem=(todoItemName)=>{
  const newTodoItems=todoItems.filter(item=>(item.name !==  todoItemName));
  setTodoItems(newTodoItems);
}

  return (
    // jb key aur value same ho js me single value bana kr daal sakte hai 
    <TodoItemsContext.Provider value={{
      todoItems:todoItems,
      addNewItem:addNewItem,
      deleteItem:deleteItem
      }}>

    <div className="todo-container text-center">
      <AppName />
      <AddTodo  />
      <WelcomeMessage />
      <TodoItems ></TodoItems>
    </div>
    </TodoItemsContext.Provider>
  );
}


export default App;

