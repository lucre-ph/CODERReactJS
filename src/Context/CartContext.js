import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext(); 
   
export const CartContextProvider = ({children}) => { 
    const [agregadosAlCarrito, setAgregadosAlCarrito] = useState ([])
    const [cantidadProductos, setCantidadProductos] = useState ([])
    const [precio, setPrecio] = useState ([])

    function isInCart (item) {
        if (agregadosAlCarrito.indexOf(item.id) === -1) {
            return false
        } else {
            return true
        }   
    }
        //     if (isInCart) { 
    //         itemCarrito.quantity
    //     }
    //     else {
    //         setAgregadosAlCarrito(agregadosAlCarrito => [...agregadosAlCarrito, itemCarrito])    
    // }

    function addItem(itemCarrito) {
        setPrecio(precio + (itemCarrito.item.price * itemCarrito.quantity))
        setCantidadProductos(cantidadProductos + itemCarrito.quantity)
        const producto = agregadosAlCarrito.find(agregadoAlCarrito => agregadoAlCarrito.item.id === itemCarrito.item.id)
        if (producto){
            const actualizarItem = producto.quantity + itemCarrito.quantity
            producto.quantity = actualizarItem
            setAgregadosAlCarrito(agregadosAlCarrito)   
        } else {
        setAgregadosAlCarrito(productosAgregados => [...productosAgregados, itemCarrito])
        }   
    }

    // function removeItem (id) {
    //     const selectRemoveItem = agregadosAlCarrito.find(itemCart => itemCart.item.id === id);
    //     setPrecio(precio - (selectRemoveItem.item.price * selectRemoveItem.quantity))
    //     setCantidadProductos(cantidadProductos - selectRemoveItem.quantity)
    //     setAgregadosAlCarrito(agregadosAlCarrito.filter((item) => item.item.id !== id));
    // }

    function clearCart () {
        setAgregadosAlCarrito([])
        setPrecio(0)
        setCantidadProductos(0)
    }

    useEffect(() => {
        console.log('Productos en carrito: ', agregadosAlCarrito)
    })

    return <CartContext.Provider value={{agregadosAlCarrito, isInCart, addItem, clearCart, cantidadProductos}}> 
        {children}
    </CartContext.Provider>
}