//IMPORTS
import React from 'react';

export const Item = ({titulo, precio, img, alt, i})=> {
    return <React.Fragment key={i}>
        <img alt={alt}>{img}</img>
        <h3>{titulo}</h3>
        <h5>${precio}</h5>
        <button>Agregar al carrito</button>
    </React.Fragment>
}