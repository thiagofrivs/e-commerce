import React from 'react'
import { useCartContext } from '../Conttext/CartContext'
import { useNavigate } from 'react-router-dom'


export const ButtonsCart = () => {
    const {clearCart} = useCartContext()

    const history=useNavigate()

    const registraCompra = () =>{
        history('/comprar')
    }
  return (
    <>
        <button onClick={()=>clearCart()}>Vaciar Carrito</button>
        <button onClick={registraCompra}>Comprar Todo</button>
    </>
  )
}
