import Item from "./Item";

const FoodItems = (props) => {
  let { items } = props; // Corrected from foodItems to items

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item}
        handleBuyButtonClicked={()=>console.log(`${item} being bought`)}
        
        
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;

