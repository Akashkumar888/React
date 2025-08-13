// import React, { useState } from 'react'
// import { CiCirclePlus } from "react-icons/ci";
// import { CiCircleMinus } from "react-icons/ci";
// import { MdClear } from "react-icons/md";

// const App = () => {
//   const [number,setNumber]=useState(0);
//   const handleIncrement=()=>{
//   setNumber(number+1);
//   }
//   const handleDecrement=()=>{
//   setNumber(number-1);
//   }
//   const handleClear=()=>{
//   setNumber(0);
//   }
//   return (
//     <div className='full'>
//       <div className="add-sub">
//        <CiCirclePlus onClick={handleIncrement} size={30}/>
//        <CiCircleMinus onClick={handleDecrement}size={30}/>
//        <MdClear onClick={handleClear} size={30}/>
//       </div>
//       <input type="number" 
//       value={number}
//       onChange={(e)=>setNumber(Number(e.target.value))}
          // placeholder="Enter a number"
//       />

//     </div>
//   )
// }

// export default App









// import React, { useState } from 'react'
// import { CiCirclePlus } from "react-icons/ci";
// import { CiCircleMinus } from "react-icons/ci";
// import { MdClear } from "react-icons/md";

// const App = () => {
//   const [number,setNumber]=useState(0);
//   return (
//     <div className='full'>
//       <div className="add-sub">
//        <CiCirclePlus onClick={()=>setNumber(number+1)} size={30}/>  Inline arrow functions
//        <CiCircleMinus onClick={()=>setNumber(number-1)}size={30}/>
//        <MdClear onClick={()=>setNumber(0)} size={30}/>
//       </div>
//       <input type="number" 
//       value={number}
//       onChange={(e)=>setNumber(Number(e.target.value))}
// placeholder="Enter a number"
//       />

//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'
// import { CiCirclePlus } from "react-icons/ci";
// import { CiCircleMinus } from "react-icons/ci";
// import { MdClear } from "react-icons/md";

// const App = () => {
//   const [number,setNumber]=useState("");// empty string initially
//   const handleIncrement=()=>{
//   setNumber((prev) => (prev === "" ? 1 : prev + 1));
//   }
//   const handleDecrement=()=>{
//   setNumber((prev) => (prev === "" ? -1 : prev - 1));
//   }
//   const handleClear=()=>{
//   setNumber("");
//   }
//   return (
//     <div className='full'>
//       <div className="add-sub">
//        <CiCirclePlus onClick={handleIncrement} size={30}/>
//        <CiCircleMinus onClick={handleDecrement}size={30}/>
//        <MdClear onClick={handleClear} size={30}/>
//       </div>
//       <input type="number" 
//       value={number}
//       onChange={(e)=>setNumber(Number(e.target.value))}
// placeholder="Enter a number"
//       />

//     </div>
//   )
// }

// export default App





// import React, { useState } from 'react'
// import { CiCirclePlus } from "react-icons/ci";
// import { CiCircleMinus } from "react-icons/ci";
// import { MdClear } from "react-icons/md";

// const App = () => {
//   const [number,setNumber]=useState("");// empty string initially
//   // This is useful if you don’t want to see 0 in the input initially.
//   return (
//     <div className='full'>
//       <div className="add-sub">
//         {/* If the input is empty, + makes it 1, - makes it -1. */}
//        <CiCirclePlus onClick={()=>setNumber((prev) => (prev === "" ? 1 : prev + 1))} size={30}/>
//        <CiCircleMinus onClick={()=>setNumber((prev) => (prev === "" ? -1 : prev - 1))}size={30}/>
//        <MdClear onClick={()=>setNumber("")} size={30}/>
//       </div>
//       <input type="number" 
//       value={number}
//       onChange={(e)=>setNumber(Number(e.target.value))}
// placeholder="Enter a number"
//       />

//     </div>
//   )
// }
// export default App


// If logic is small → inline functions (Version 2 / Version 4).
// If logic is bigger or reused → separate handlers (Version 1 / Version 3).
// If you want empty field initially → use empty string state (Version 3 / Version 4).
// If you want 0 initially → use number state (Version 1 / Version 2).



// import React, { useState } from 'react'
// import { FaSquareFull } from "react-icons/fa";
// import { FaCube } from "react-icons/fa";

// const App = () => {
//   const [number, setNumber] = useState(""); // empty string initially

//   return (
//     <div className='full'>
//       <div className="add-sub">
        

//         {/* Square & Cube */}
//         <FaSquareFull onClick={() => setNumber((prev) => (prev === "" ? "" : prev * prev))} size={30} />
//         <FaCube onClick={() => setNumber((prev) => (prev === "" ? "" : prev * prev * prev))} size={30} />

        
//       </div>

//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(Number(e.target.value))}
// placeholder="Enter a number"
//       />
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react'
// import { FaSquareFull } from "react-icons/fa";
// import { FaCube } from "react-icons/fa";

// const App = () => {
//   const [number, setNumber] = useState(""); // empty string initially
//   // For storing and updating values over time 
//   const handleSquare=()=>{
//     setNumber((prev)=>(prev===""?"":Math.pow(prev,2)));
//   }
//   const handleCube=()=>{
//     setNumber((prev)=>(prev===""?"":Math.pow(prev,3)));
//   }
//   return (
//     <div className='full'>
//       <div className="add-sub">
      
//         {/* Square & Cube */}
//         <FaSquareFull onClick={handleSquare} size={30} />
//         <FaCube onClick={handleCube} size={30} />

//       </div>

//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(Number(e.target.value))}
// placeholder="Enter a number"
//       />
//     </div>
//   );
// }

// export default App;


// import React, { useState, useMemo } from 'react';
// import { FaSquareFull, FaCube } from "react-icons/fa";

// const App = () => {
//   const [number, setNumber] = useState("");
// //   useState
// // For storing and updating values over time (e.g., input values, counters, toggles).

//   const squared = useMemo(() => {
//     return number === "" ? "" : Math.pow(number, 2);
//   }, [number]);
// //   useMemo
// // For memoizing derived/computed values that are expensive to calculate, so they don’t recompute unnecessarily.
//   const cubed = useMemo(() => {
//     return number === "" ? "" : Math.pow(number, 3);
//   }, [number]);

//   return (
//     <div className='full'>
//       <div className="add-sub">
//         <FaSquareFull onClick={() => setNumber(squared)} size={30} />
//         <FaCube onClick={() => setNumber(cubed)} size={30} />
//       </div>

//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(Number(e.target.value))}
// placeholder="Enter a number"
//       />
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
// import { FaSquareFull, FaCube } from "react-icons/fa";

// // Custom hook for calculations
// const useMathOperations = (number) => {
//   const squared = useMemo(() => (number === "" ? "" : Math.pow(number, 2)), [number]);
//   const cubed = useMemo(() => (number === "" ? "" : Math.pow(number, 3)), [number]);
//   return { squared, cubed };
// };

// const App = () => {
//   const [number, setNumber] = useState("");
//   const { squared, cubed } = useMathOperations(number);
//   const inputRef = useRef(null);

//   // Focus input on mount
//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   // Log whenever number changes
//   useEffect(() => {
//     if (number !== "") {
//       console.log(`Number changed to: ${number}`);
//     }
//   }, [number]);

//   // Memoized callbacks to avoid unnecessary re-renders
//   const handleSquare = useCallback(() => {
//     setNumber(squared);
//   }, [squared]);

//   const handleCube = useCallback(() => {
//     setNumber(cubed);
//   }, [cubed]);

//   return (
//     <div className="full">
//       <div className="add-sub">
//         <FaSquareFull onClick={handleSquare} size={30} title="Square" />
//         <FaCube onClick={handleCube} size={30} title="Cube" />
//       </div>

//       <input
//         ref={inputRef}
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(Number(e.target.value))}
//         placeholder="Enter a number"
//       />
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect, useMemo, useCallback, useRef, useReducer } from "react";
// import { FaSquareFull, FaCube } from "react-icons/fa";

// // ✅ Custom Hook for math calculations
// function useMathOperations(number) {
//   const square = useMemo(() => {
//     console.log("Calculating square...");
//     return number ** 2;
//   }, [number]);

//   const cube = useMemo(() => {
//     console.log("Calculating cube...");
//     return number ** 3;
//   }, [number]);

//   return { square, cube };
// }

// // ✅ Reducer for demonstration (alternative to multiple useState)
// function reducer(state, action) {
//   switch (action.type) {
//     case "SET_NUMBER":
//       return { ...state, number: action.payload };
//     default:
//       return state;
//   }
// }

// const App = () => {
//   // State using reducer
//   const [state, dispatch] = useReducer(reducer, { number: "" });

//   // Refs
//   const inputRef = useRef(null);

//   // Get math results from custom hook
//   const { square, cube } = useMathOperations(Number(state.number) || 0);

//   // Handlers (memoized)
//   const handleSquare = useCallback(() => {
//     if (state.number !== "") {
//       dispatch({ type: "SET_NUMBER", payload: square });
//     }
//   }, [square, state.number]);

//   const handleCube = useCallback(() => {
//     if (state.number !== "") {
//       dispatch({ type: "SET_NUMBER", payload: cube });
//     }
//   }, [cube, state.number]);

//   // Auto focus & log changes
//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   useEffect(() => {
//     console.log("Number changed:", state.number);
//   }, [state.number]);

//   return (
//     <div className="full" style={{ padding: "20px", textAlign: "center" }}>
//       <div className="add-sub" style={{ marginBottom: "10px" }}>
//         <FaSquareFull onClick={handleSquare} size={30} style={{ cursor: "pointer", margin: "5px" }} />
//         <FaCube onClick={handleCube} size={30} style={{ cursor: "pointer", margin: "5px" }} />
//       </div>

//       <input
//         ref={inputRef}
//         type="number"
//         value={state.number}
//         onChange={(e) => dispatch({ type: "SET_NUMBER", payload: e.target.value })}
//         style={{ padding: "5px", fontSize: "16px" }}
//       />

//       <div style={{ marginTop: "15px" }}>
//         <p>Square: {square}</p>
//         <p>Cube: {cube}</p>
//       </div>
//     </div>
//   );
// };

// export default App;






import React, { useState, useMemo, useCallback } from "react";
import { FaSquareFull } from "react-icons/fa";
import { FaCube } from "react-icons/fa";

const App = () => {
  // 1️⃣ useState → store current number
  const [number, setNumber] = useState("");

  // 2️⃣ useMemo → memoize computed values
  const square = useMemo(() => {
    console.log("Calculating square...");
    return number === "" ? "" : Math.pow(number, 2);
  }, [number]);

  const cube = useMemo(() => {
    console.log("Calculating cube...");
    return number === "" ? "" : Math.pow(number, 3);
  }, [number]);

  // 3️⃣ useCallback → memoize handlers
  const handleSquare = useCallback(() => {
    if (number !== "") setNumber(square);
  }, [number, square]);

  const handleCube = useCallback(() => {
    if (number !== "") setNumber(cube);
  }, [number, cube]);

  return (
    <div className="full">
      <div className="add-sub">
        {/* Square & Cube */}
        <FaSquareFull onClick={handleSquare} size={30} />
        <FaCube onClick={handleCube} size={30} />
      </div>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <div>
        <p>Square: {square}</p>
        <p>Cube: {cube}</p>
      </div>
    </div>
  );
};

export default App;


