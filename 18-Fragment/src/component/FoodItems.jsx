import { useState } from "react";
import Item from "./Item";

const FoodItems = (props) => {
  let { items } = props; // Corrected from foodItems to items
  

  let [activeItems,setActiveItems]=useState([]);


  
  let onlyBuyBotton=(item,event)=>{
  let newItem=[...activeItems,item];
  setActiveItems(newItem);
  }
  

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item 
        key={item} 
        foodItem={item}
        bought={activeItems.includes(item)}
        handleBuyButtonClicked={(event)=> onlyBuyBotton(item,event)}
        
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;



