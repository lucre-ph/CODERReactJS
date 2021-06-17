//IMPORTS
import React from 'react';
import {Item} from '../item/Item';



export const ItemList = arrayProductos => {
    const listaDeProductos = arrayProductos.map((producto, i) => 
        <Item titulo={producto.title} precio={producto.price} img={producto.img} alt={producto.alt} i={i}/>);
    return <div>
        <Item props={listaDeProductos}/>
    </div>
}