import React, { useState } from 'react'

const Counter = () => {
//useState
const [c,setc]=useState(0);
// event handler 
const incrementHandler=()=>{
setc(c+1)
}
const resetHandler=()=>{
setc(0)
}



  return (
    <div>
      <h1 className='text-black text-lg '>
        Counter:{c}
      </h1>
      <button className='mx-5 px-5 text-green-500 border-green-500 border-2 border-solid' onClick={incrementHandler} >+</button>
      <button className='mx-5 px-5 text-red-500 border-red-500 border-2 border-solid' onClick={()=>setc(c-1)} >-</button>
      <button className='mx-5 px-5 text-blue-500 border-blue-500 border-2 border-solid' onClick={resetHandler} >Reset</button>
    </div>
  )
}

export default Counter
