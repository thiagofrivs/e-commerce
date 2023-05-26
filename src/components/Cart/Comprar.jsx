import React from 'react'
import { useCartContext } from '../Conttext/CartContext';
import { Form } from './Form';

export const Comprar = () => {
    
    const { cart } = useCartContext()
    const total = cart.reduce(
        (acc, producto) => acc + producto.cantidad * producto.price,
        0
    );

    return (
        <div className='todos center'>

            <h3>Los artículos en tu carrito son:</h3>

            <div className='list'>
                {cart.map(item=>
                    <div key={item.id} className='list-child'>
                        <h4>{item.title}</h4>
                        <h5>Cantidad: {item.cantidad}</h5>
                        <h5>Total: ${item.cantidad*item.price}</h5>
                    </div>
                    )}
                    <h3>Los artículos a comprar ascienden a un total de: ${total}</h3>
            </div>

            <Form/>
            

        </div>
    )
}
