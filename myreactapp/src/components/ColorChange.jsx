import React, { useState } from 'react'

const ColorChange = () => {
    const [n,setn]=useState("Kishore")
    const [c,setc]=useState("text-black")
    const changeHandler=()=>{
        setn("Akshatra")
        setc("text-red-700")

    
    }


  return (
    <>
     <h1 className={`${c} text-purple-700 text-lg `}>Name:{n}</h1> 
     <button className='mx-5 px-5 text-yellow-900 border-yellow-900 border-5 border-solid' onClick={changeHandler}>Change</button>
    </>
  )
}

export default ColorChange
