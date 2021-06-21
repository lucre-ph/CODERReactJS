//IMPORTS
import React from 'react';
import {Item} from '../item/Item';

//COMPONENTE ITEMLIST
export const ItemList = arrayProductos => {
    const {prods} = arrayProductos;
    
    return <>
        {prods.map((producto, i) => 
            <Item titulo={producto.title} precio={producto.price} img={producto.img} alt={producto.alt} i={i}/>)}
    </>
}