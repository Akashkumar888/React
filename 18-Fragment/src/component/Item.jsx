const Item = (props) => {
  let { foodItem } = props; // Correct destructuring
  return <li className="list-group-item">{foodItem}</li>;
};

export default Item;

