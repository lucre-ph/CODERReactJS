//IMPORTS
import React from 'react';

export const Item = ({title, img, alt, price, i}) => {
    return (
        <section key= {i}>
            <img alt={alt} src={img}></img>
            <h4>{title}</h4>
            <h2>${price}</h2>
            <button>Agregar al carrito</button>
        </section>
    )
}