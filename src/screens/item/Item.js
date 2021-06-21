//IMPORTS
import React from 'react';

export const Item = ({...producto}) => {
    return <React.Fragment key={producto.i}>
        <img alt={producto.alt}>{producto.img}</img>
        <h3>{producto.titulo}</h3>
        <h5>${producto.precio}</h5>
        <button>Agregar al carrito</button>
    </React.Fragment>
}