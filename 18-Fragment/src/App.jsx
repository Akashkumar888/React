// // import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";



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
   let foodItem = ["Daal", "Green Vegitable", "Salad", "Roti", "Milk","Ghee","Chana"];
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

      <ErrorMessage items={foodItem}></ErrorMessage>
      <FoodItems items={foodItem}> </FoodItems>
    </Container>

  {/* <Container>
    <p>Above is the list of healthy foods that are good for your health and well being.</p>
  </Container> */}
  
  </>

  );
}

export default App;



