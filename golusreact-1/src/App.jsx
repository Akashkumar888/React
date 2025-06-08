
import React from "react";

function App() {
  return (
    <> {/* React Fragment */}
      <div className="main"> 
        {/* This is a comment inside JSX */}
        <h1>Hey Akash</h1>
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

