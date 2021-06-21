//IMPORTS
import React from 'react';
import {Item} from '../item/Item';

//COMPONENTE ITEMLIST
export const ItemList = arrayProductos => {
    
    return arrayProductos.map((producto, i) => 
        <Item producto={producto} i={i}/>)
    
}