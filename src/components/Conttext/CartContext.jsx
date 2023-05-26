import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('carrito')));



    if (cart === null) {
        setCart([])
    }


    const addProduct = (item) => {
        const indice = cart.findIndex((p) => p.id === item.id); 
        if (indice !== -1) {
            const nuevosProductos = [...cart];
            nuevosProductos[indice].cantidad = item.cantidad;
            setCart(nuevosProductos); 
            localStorage.setItem('carrito',JSON.stringify(nuevosProductos))
        } else {
            setCart([...cart, item]);
            localStorage.setItem('carrito',JSON.stringify(cart))
        }

    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.cantidad * act.price, 0)
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)



    const clearCart = () => {
        setCart([])
        localStorage.clear()
    }

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id,cant) =>{
        
        const carrito= [...cart]
        const index=carrito.findIndex((producto=>producto.id===id))
        carrito[index].cantidad=carrito[index].cantidad-cant
        if(carrito[index].cantidad===0){
            carrito.splice(index,1)
        }
        setCart(carrito)
        
    }


    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart

        }}>
            {children}
        </CartContext.Provider>
    );

};
export default CartProvider;