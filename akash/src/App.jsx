
import React from "react";
import Products from "./Products";

function App() {
  return (
    <> {/* React Fragment */}
      <div className="w-full h-screen bg-zinc-50 p-4"> 
        {/* This is a comment inside JSX */}
        
        <div className="w-44 h-32 rounded-xl bg-red-600 p-3 text-white">
          <h2>Hello Akash kumar</h2>
        </div>

      <Products/>
      
      </div> {/* HTML/JavaScript uses "class", but in JSX, it's "className" */}
      
    </>
  );
}


export default App;




// ✅ Why use className instead of class in JSX?
// In HTML, we use class to define CSS classes:


// html
// <div class="main">Hey Akash</div>
// But in JSX (React), we must use className instead of class:


// jsx
// <div className="main">Hey Akash</div>

// 📌 Why is it className in JSX?

// JSX is not HTML—it's JavaScript.
// In JavaScript, class is a reserved keyword (used for defining classes).
// To avoid conflicts, React uses className for CSS classes instead of class.

