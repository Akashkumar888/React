





import React from 'react'

function App() {
  return (
    <h1>App</h1> // => React.createElement("h1", null, "App");
  )
}

export default App







// component ek function hai jo return karega jsx
// jsx html ki tarah dhikhne val syntax hai but uske pass kuch superpoer hai jo html ke pass nhi hai 

// html ki tarah dhikta hai html nhi hota ye convert hiata hai javascript me ok


// App.jsx me jo code likhte ho vahi website pr dhikhta hai aur koi nhi dhikhta 


// import React from 'react'

// function App() {
//   return (
//     <div>App</div> // => React.createElement("div", null, "App");
//   )
// }

// export default App



// 1️⃣ JSX Code (Declarative)


// function App() {
//   return (
//     <div>App</div>
//   );
// }


// This is written using JSX (JavaScript XML).
// JSX is a syntactic sugar that makes writing UI components easier.
// Browsers don't understand JSX directly, so it must be converted to plain JavaScript using Babel.



// 2️⃣ Equivalent React Code (Imperative)
// jsx


// function App() {
//   return React.createElement("div", null, "App");
// }
// This is how React interprets JSX behind the scenes.
// React.createElement takes three arguments:


// React.createElement(type, props, children)

// type: "div" (the HTML tag).
// props: null (no attributes like className, id, etc.).
// children: "App" (the text inside the div).
// How JSX Converts to JavaScript
// When you write:


// <div>App</div>
// It gets transpiled by Babel into:

// js
// React.createElement("div", null, "App");
// So, both approaches render the same output in React.

// Which One Should You Use?
// ✅ Use JSX because it's easier to read and closer to HTML syntax.
// ✅ React.createElement is used internally and rarely written manually.

