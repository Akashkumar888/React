import React from 'react'
import { useState } from 'react'
import Products from './Products';
// react ka naam react isliye hai react, react krta hai jb bhi state or props change hoti hai aur yahi main midel hai pyre react ka , yahi uska heart hai aur yahi uske kaam krne ka tarika hai  

function App() {
  var [a,b]=useState(69);
  
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      {/* <h1>{a}</h1>
      <button   onClick={()=>{
        b(a+1)
      }} className='px-3 py-1 bg-green-500 rounded-md text-xs'>Click</button> */}
      <Products valueOfa={a} data={{age:21,Name:"Akash"}}/>
    </div>
  )
}

export default App

