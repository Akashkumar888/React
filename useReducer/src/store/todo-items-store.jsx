// store/todo-items-store.js
import { createContext, useReducer } from 'react';

// ✅ Create Context
const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// ✅ Reducer
const todoItemReducer = (currTodoItem, action) => {
  let newTodoItems=currTodoItem;
  if (action.type === 'NEW_ITEM') {
    newTodoItems= [
      ...currTodoItem,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === 'DELETE_ITEM') {
    newTodoItems= currTodoItem.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};


// ✅ Context Provider Component
export const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItem] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    dispatchTodoItem({
      type: 'NEW_ITEM',
      payload: { 
        itemName, 
        itemDueDate
       },
    });
  };

  const deleteItem = (todoItemName) => {
    dispatchTodoItem({
      type: 'DELETE_ITEM',
      payload: { 
        itemName :todoItemName
      },
    });
  };


  return (
    <TodoItemsContext.Provider value={
      { todoItems, 
        addNewItem, 
        deleteItem 
      }
      }>
      {children}
    </TodoItemsContext.Provider>
  );
};


export default TodoItemsContext;

