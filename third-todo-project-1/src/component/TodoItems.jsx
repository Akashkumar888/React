

import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem 
          key={index} // Added a unique key for each list item
          todoDate={item.dueDate} 
          todoName={item.name} 
        />
      ))}
    </div>
  );
};

export default TodoItems;

