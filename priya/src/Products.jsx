
import React from 'react'
import { useState } from 'react'
// only one props receive in react 
// 👉 In React:
// A component always receives only one props object.
// Inside it, you can have multiple key-value pairs.

function Products({valueOfa,data}) {
  const [a,b]=useState(false);
  return (
    <div className='text-white w-full h-60 bg-zinc-800'>
      <h1>{valueOfa}</h1>
      <h2>{data.age} </h2>
      <h3>{data.Name} </h3>

      <h4 className={ `${a===false ? "text-red-600" : "text-blue-600"}` }
      >{a===false ? "Hello" : "HIII"}</h4>
      <button onClick={()=>b(!a)} className='px-3 py-1 bg-green-500 rounded-md text-xs'>Click</button>
    </div>
  )
}

export default Products


