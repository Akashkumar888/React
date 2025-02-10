// // import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";


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
   let foodItem = ["Daal", "Green Vegitable", "Salad", "Roti", "Milk"];
  // if(foodItem.length===0){
  //   return <h3>I am still Hungry.</h3>
  // }

  {
    /* // ternary operator use */
  }
  // let emptyMessage = foodItem.length === 0 ? <h3>I am still Hungry.</h3> : null;

  return (
    <>
      <h1>Healthy Foods</h1>

      <ErrorMessage items={foodItem}></ErrorMessage>
      <FoodItems items={foodItem}> </FoodItems>

    </>
  );
}

export default App;



