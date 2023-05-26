import React, { useState } from 'react'
import { useCartContext } from '../Conttext/CartContext'
import { ItemCount } from './ItemCount'

export const ItemDetail = ({ item }) => {

  const [goToCart, setGoToCart] = useState(false)

  const { addProduct } = useCartContext()

  const onAdd = (cantidad) => {
    setGoToCart(true)
    item.cantidad=cantidad+item.cantidad
    item.stock=item.stock-cantidad
    addProduct(item)
  }

  return (
    <>
    <div className='todos-detail'>
      <img className='img-detail' src={item.img} alt={item.title} />
      <div className='escrito'>
        <div className="title">
          <h3>{item.title}</h3>
          <h4 className='price'>$ {item.price}</h4>
        </div>
        <div className='desc'><p>{item.description}</p></div>
      </div>
    </div>
    
    <ItemCount stock={item.stock} onAdd={onAdd}/>
    </>
  )
}
