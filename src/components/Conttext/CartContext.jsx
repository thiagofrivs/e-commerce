import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('carrito')));



    if (cart === null) {
        setCart([])
    }


    const addProduct = (item) => {
        const indice = cart.findIndex((p) => p.id === item.id); // Encontrar el índice del producto con id igual al que queremos agregar
        if (indice !== -1) {
            // Si el producto ya existe, incrementar la cantidad
            const nuevosProductos = [...cart];
            console.log(nuevosProductos) // Copiar el array original
            nuevosProductos[indice].cantidad = item.cantidad;
             // Modificar la cantidad del producto existente en la copia del array
            setCart(nuevosProductos); // Actualizar el estado con la copia del array modificado
            localStorage.setItem('carrito',JSON.stringify(cart))
        } else {
            // Si el producto no existe, agregar el producto completo al array
            setCart([...cart, item]); // Agregar el nuevo producto al array y actualizar el estado
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

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));


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