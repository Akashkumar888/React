

import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import TodoItemsContext from "../store/todo-items-store";
import { useContext } from "react";


const TodoItems = ({onDeleteClick }) => {
 
  const todoItems= useContext(TodoItemsContext);


  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem 
          key={item.name} // Added a unique key for each list item
          todoDate={item.dueDate} 
          todoName={item.name} 
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;

