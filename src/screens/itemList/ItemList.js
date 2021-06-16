//IMPORTS
import React from 'react';
import {Item} from '../item/Item';

export const ItemList = arrayCatalogo => {
    const Productos = arrayCatalogo.map((product, i) =>
    <Productos imagen={product.img} titulo={product.title} i={i}/>);

    return <>
        <Item {...Productos}/>
    </>
}