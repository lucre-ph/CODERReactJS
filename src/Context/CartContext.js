import React, {createContext, useState, useEffect} from 'react';
import {ItemCount} from '../screens/ItemDetailContainer/components/ItemCount/ItemCount';

export const CartContext = createContext(); 
   
export const CartContextProvider = () => { 
    const [agregadosAlCarrito, setAgregadosAlCarrito] = useState ([])

    useEffect(() => {
        console.log('Productos en carrito: ', agregadosAlCarrito)
    })

//  isInCart: (id) => true|false*/
    // function addItem(item, quantity) {
        
    // }

    // function removeItem (id) {
        
    // }

    // function clearCart () {
    //     setAgregadosAlCarrito([0])
    // }


    return <CartContext.Provider value={{agregadosAlCarrito, setAgregadosAlCarrito}}> 
        <ItemCount/>
    </CartContext.Provider>
}