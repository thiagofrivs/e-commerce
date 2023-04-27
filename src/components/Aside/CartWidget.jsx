import React from 'react'
import { useCartContext } from '../Conttext/CartContext'

export const CartWidget = () => {
    const {totalProductos}=useCartContext();
  return (
    <>
    <i className="bi bi-cart4"></i>
    <span>{totalProductos||'0'}</span>
    </>
  )
}
