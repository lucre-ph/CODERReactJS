//IMPORTS
import React from 'react';
import {Item} from '../item/Item';

//ARRAY DE PRODUCTOS
const productos = [
    {
        title: 'Cheesecake',
        img: '..../public/img/cheesecake.jpg',
        alt: 'torta cheesecake',
        price: 500,
        stock: 10
    },
    {
        title: 'Torta de chocolate',
        img: './chocolate.jpg',
        alt: 'torta de chocolate',
        price: 500,
        stock: 10
    },
    {
        title: 'Eclair',
        img: './eclair.jpg',
        alt: 'eclair',
        price: 500,
        stock: 10
    }
  ]


const Producto = ({imagen, titulo, i}) => {
    return <React.Fragment key= {i}>
        <img alt={[productos].alt} src={imagen}></img>
        <h4>{titulo}</h4>
        <button>Agregar al carrito</button>
    </React.Fragment>
}

export const ItemList = props => {
    const productosDulces = productos.map((product, i) =>
    <Producto imagen={product.img} titulo={product.title} i={i}/>);

    return <div className="itemCard">
        {productosDulces}
    </div>
}