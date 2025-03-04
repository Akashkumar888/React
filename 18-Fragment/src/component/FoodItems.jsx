import { useState } from "react";
import Item from "./Item";

const FoodItems = (props) => {
  let { items } = props; // Corrected from foodItems to items
  
  let [activeItems,setActiveItems]=useState([]);

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item 
        key={item} 
        foodItem={item}
        bought={activeItems.includes(item)}
        handleBuyButtonClicked={()=>console.log(`${item} being bought`)}
        
        
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;

