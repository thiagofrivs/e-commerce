import React, { useEffect } from 'react'
import { useCartContext } from '../Conttext/CartContext'

export const CartWidget = () => {

    const {totalProducts}=useCartContext();
    
    console.log(totalProducts())

  return (
    <>
    <i className="bi bi-cart4"></i>
    <span>{totalProducts()||'0'}</span>
    </>
  )
}
