import React from 'react'
import { products } from './Product'

const Card = () => {
  return (
    <>
    {products.map((p)=>(
        <div>
        <p>{p.name}</p>
        <p>{p.price}</p>
        </div>
    )

    )

    }
    </>

  )
}

export default Card