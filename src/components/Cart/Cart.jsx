import React from 'react'
import { ItemCartContainer } from './ItemCartContainer'
import { useCartContext } from '../Conttext/CartContext'
import { CartVacio } from './CartVacio'

export const Cart = () => {
  const {cart}=useCartContext()
  console.log(cart)
  return (
    <div className='todos'>
      {cart.length >0?<ItemCartContainer cart={cart}/>:<CartVacio/>}
    </div>
  )
}
