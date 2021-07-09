import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext(); 
   
export const CartContextProvider = ({children}) => { 
    const [agregadosAlCarrito, setAgregadosAlCarrito] = useState ([])
    // DESAFÍO 11 const [cantidadProductos, setCantidadProductos] = useState ([])

    const isInCart = (id) => {
        if (agregadosAlCarrito.indexOf(id) === -1) {
            isInCart(true)
            console.log('nuevo carrito:');
        } else if (agregadosAlCarrito.indexOf(id) > -1) {
            isInCart(false)
            console.log('ya existe en carrito');
        }   
    }
    
    function addItem(itemCarrito) {
        <isInCart/> ? setAgregadosAlCarrito(itemCarrito) : setAgregadosAlCarrito([...agregadosAlCarrito, itemCarrito])    
    }

    function removeItem (/**/) {
            //
    }

    function clearCart () {
        setAgregadosAlCarrito([])
    }

    useEffect(() => {
        console.log('Productos en carrito: ', agregadosAlCarrito)
    })

    return <CartContext.Provider value={{agregadosAlCarrito, isInCart, addItem, removeItem, clearCart}}> 
        {children}
    </CartContext.Provider>
}