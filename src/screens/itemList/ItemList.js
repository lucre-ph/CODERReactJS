//IMPORTS
import React from 'react';
import {Item} from '../item/Item';

//COMPONENTE ITEMLIST
export const ItemList = arrayProductos => {
    
    return <React.Fragment>
        {arrayProductos.map((producto) => {
            <Item {...producto}/> })}
    </React.Fragment>
    
}