import Item from "./Item";

const FoodItems = (props) => {
  let { items } = props; // Corrected from foodItems to items

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} />
      ))}
    </ul>
  );
};

export default FoodItems;

