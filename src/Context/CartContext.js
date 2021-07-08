import React, {createContext, useState, useEffect} from 'react';
import {ItemCount} from '../screens/ItemDetailContainer/components/ItemCount/ItemCount';
import {ItemDetail} from '../screens/ItemDetailContainer/components/ItemDetail/ItemDetail';
import {CartWidget} from '../components/cartWidget/CartWidget';

export const CartContext = createContext(); 
   
export const CartContextProvider = () => { 
    const [agregadosAlCarrito, setAgregadosAlCarrito] = useState ([])
    const [cantidadProductos, setCantidadProductos] = useState(0)
    const [precio, setPrecio] = useState(0)  
    
    useEffect(() => {
            console.log('Productos en carrito: ', agregadosAlCarrito)
        })
        
    const IsInCart = id => {
        agregadosAlCarrito.find(agregados => agregados.item.id == id)
    }
    
    function addCartItem (item, id, quantity) {
        setAgregadosAlCarrito(agregadosAlCarrito => [...agregadosAlCarrito, {item: item, quantity: quantity}])
        setPrecio(precio + (item.price * item.quantity))
        setCantidadProductos(cantidadProductos + item.quantity)
        if (IsInCart(item.id)){
            const actualizarItem = agregadosAlCarrito.map((itemCart) => {                        
                const cantidadTotal = itemCart.quantity + item.quantity; 
                if (agregadosAlCarrito.id == id){                     
                    return {...itemCart, quantity: cantidadTotal}
                }
                return {itemCart}
            })
            setAgregadosAlCarrito(actualizarItem)
        } else{
            setAgregadosAlCarrito(productosAgregados => [...productosAgregados, item])
        }}
        

    function removeCartItem (id) {
        const selectRemoveItem = agregadosAlCarrito.find(itemCart => itemCart.id == id);
        setPrecio(precio - (selectRemoveItem.item.price * selectRemoveItem.quantity))
        setCantidadProductos(cantidadProductos - selectRemoveItem.quantity)
        setAgregadosAlCarrito(agregadosAlCarrito.filter((item) => item.id !== id));
    }

    function clearCart () {
        setAgregadosAlCarrito([0])
        setCantidadProductos(0)
        setPrecio(0)
    }

    return <CartContext.Provider value={{agregadosAlCarrito, cantidadProductos, precio, addCartItem, removeCartItem, clearCart}}> 
        <ItemCount/>
        <ItemDetail/>
        <CartWidget/>
    </CartContext.Provider>
}