// 🟡 For Node.js (CommonJS — For server-side or backend JS)

// 🟡 Legacy/CommonJS (Still works, mostly used in Node environments)
// const { createContext } = require('react');
// const TodoItemsContext=createContext();
// module.exports=TodoItemsContext;





// ✅ Modern (ES6 Modules – Recommended in React projects)
import  {createContext} from 'react';

const TodoItemsContext=createContext([
  {
      todoItems:"",
      addNewItem:()=> {},
      deleteItem:()=> {}
      }
]);

export default  TodoItemsContext;

// ✅ For React (Modern ES6 Modules — Recommended for React Apps)








