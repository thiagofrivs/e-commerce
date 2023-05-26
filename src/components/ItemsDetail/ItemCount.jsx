import React, { useState } from 'react'

export const ItemCount = ({stock,onAdd}) => {

    const [count,setCount]=useState(0)

    const decrease=()=>{
        setCount(count-1)
    }

    const increase = () =>{
        setCount(count+1)
    }

    




  return (
    <div className='counter'>
        <span>Stock disopnible :  {stock}</span>
        <button disabled={count<=0} onClick={decrease}>-</button>
        <span>{count}</span>
        <button disabled={count>=stock} onClick={increase}>+</button>

        <div>
            <button disabled={count>stock } onClick={()=>onAdd(count)}>Agregar al Carrito</button>
        </div>
    </div>
  )
}
