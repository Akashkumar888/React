// // import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";

import { useState } from "react";

// function App() {
//   return (
//      <>
//       <h1>Healthy Foods</h1>
//       <ul className="list-group">
//         <li className="list-group-item">Daal</li>
//         <li className="list-group-item">Green Vegitable</li>
//         <li className="list-group-item">Salad</li>
//         <li className="list-group-item">Roti</li>
//         <li className="list-group-item">Milk</li>
//       </ul>
//      </>

//   );
// }

// export default App;

function App() {
  //
  //  let foodItem = ["Daal", "Green Vegitable", "Salad", "Roti", "Milk","Ghee","Chana"];

  // let [textToShow, setTextState] = useState();

  let [foodItems, setFoodItems] = useState([]);

  // let textStateArr=useState("food item entered by users"); {/*isme hamesha do hi value*/}

  // let textToShow=textStateArr[0];
  // // let textStateVal=textStateArr[0];

  // // let textStateMethod=textStateArr[1];
  // let setTextState=textStateArr[1];

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value="";
      let newItems=[...foodItems ,newFoodItem];
      setFoodItems(newItems);
    }
  };

  // if(foodItem.length===0){
  //   return <h3>I am still Hungry.</h3>
  // }

  {
    /* // ternary operator use */
  }
  // let emptyMessage = foodItem.length === 0 ? <h3>I am still Hungry.</h3> : null;

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>

        <FoodInput handleKeyDown={onKeyDown}> </FoodInput>

        <ErrorMessage items={foodItems}></ErrorMessage>
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems}> </FoodItems>
      </Container>

      {/* <Container>
    <p>Above is the list of healthy foods that are good for your health and well being.</p>
  </Container> */}
    </>
  );
}

export default App;

