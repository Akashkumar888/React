import styles from "./Item.module.css"; // Importing CSS module



const Item = ({foodItem,handleBuyButtonClicked}) => {
  // const handleBuyButtonClicked=(event)=>{
  //   console.log(event);
  //   console.log(`${foodItem} being bought`);
  // };
  return (
    <li className={` ${styles['kg-item']} list-group-item `}> {/* Apply the correct class */}
      <span className={styles['kg-span']}> {foodItem} </span>
      <button className={`${styles.button} btn btn-info`}
      onClick={handleBuyButtonClicked}
      
      >Buy</button>
    </li>
  );
};

export default Item;

