import React from 'react'
import { useCartContext } from '../Conttext/CartContext'

export const ItemCart = ({ cart }) => {

  const { removeProduct } = useCartContext()
  return (
    <>
      <h2>Tu  carrito</h2>
      {
        cart.map(item =>
          <div className='container-cart' key={item.id}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <h4>Cantidad: {item.cantidad}</h4>
            <h4>Precio unitario: ${item.price}</h4>
            <h4>Precio Total: ${item.price * item.cantidad}</h4>
            <div className='icons'>
              <button onClick={() => removeProduct(item.id, 1)}><i className="bi bi-trash"></i></button>
              <button onClick={() => removeProduct(item.id, item.cantidad)}> <i className="bi bi-x-octagon"></i> </button>
            </div>
          </div>
        )
      }
    </>
  )
}
