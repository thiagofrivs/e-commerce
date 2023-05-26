import React from 'react'
import { ItemCart } from './ItemCart'
import { ButtonsCart } from './ButtonsCart'

export const ItemCartContainer = ({ cart }) => {

    console.log(cart)
    return (<>
        <div className='container-cart-todos'>
            <ItemCart cart={cart} />
        </div>
        <div className='buttonscart'>
            <ButtonsCart />
        </div>
        </>
    )
}
