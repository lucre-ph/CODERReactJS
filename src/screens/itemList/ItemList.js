//IMPORTS
import React from 'react';
import {Item} from '../item/Item';

export const ItemList = propsProductos => {
    const Productos = propsProductos.map((product, i) =>
    <Productos imagen={product.img} titulo={product.title} i={i}/>);

    return <>
        <Item title={product.title} img={product.img} alt={product.alt} price= {product.price} i={i}/>
    </>
}