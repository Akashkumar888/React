// App.js
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";
import "./apnabhai.css";

import { TodoItemsContextProvider } from "./store/todo-items-store"; // ✅ Import provider



function App() {
  return (
    <TodoItemsContextProvider>
      <div className="todo-container text-center">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
