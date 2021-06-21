import React from 'react';
import {Item} from '../item/Item';

export const ItemList = props => {
    const {arrayProductos} = props;
    
    return <React.Fragment>
        {arrayProductos.map((producto, i) => { 
            return <Item key={i} {...producto}/>
        })}
    </React.Fragment>
}