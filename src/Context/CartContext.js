import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext(); 
   
export const CartContextProvider = ({children}) => { 
    const [agregadosAlCarrito, setAgregadosAlCarrito] = useState ([])
    const [cantidadProductos, setCantidadProductos] = useState ([])
    const [precio, setPrecio] = useState (0)

    function addItem(itemCarrito) {
        console.log(precio)
        setPrecio(precio + (Number(itemCarrito.item.price) * Number(itemCarrito.quantity)))
        setCantidadProductos(Number(cantidadProductos) + Number(itemCarrito.quantity))
        const producto = agregadosAlCarrito.find(agregadoAlCarrito => agregadoAlCarrito.item.id === itemCarrito.item.id)
        if (producto){
            const actualizarItem = producto.quantity + itemCarrito.quantity
            producto.quantity = actualizarItem
            setAgregadosAlCarrito(agregadosAlCarrito)   
        } else {
        setAgregadosAlCarrito(productosAgregados => [...productosAgregados, itemCarrito])
        }
        console.log(precio)   
    }

    function removeItem (id) {
        const eliminarItem = agregadosAlCarrito.find(itemCarrito => itemCarrito.item.id === id);
        setPrecio(precio - (eliminarItem.item.price * eliminarItem.quantity))
        setCantidadProductos(Number(cantidadProductos) - Number(eliminarItem.quantity))
        setAgregadosAlCarrito(agregadosAlCarrito.filter((item) => item.item.id !== id));
        console.log(precio)
    }

    function clearCart () {
        setAgregadosAlCarrito([])
        setPrecio(0)
        setCantidadProductos(0)
        console.log(precio)
    }

    useEffect(() => {
        console.log('Productos en carrito: ', agregadosAlCarrito)
    })

    return <CartContext.Provider value={{agregadosAlCarrito, addItem, removeItem, clearCart, cantidadProductos, precio}}> 
        {children}
    </CartContext.Provider>
}