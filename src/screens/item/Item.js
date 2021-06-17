//IMPORTS
import React from 'react';

export const Item = ({props})=> {
    return <React.Fragment key={props.i}>
        <img alt={props.alt}>{props.img}</img>
        <h3>{props.title}</h3>
        <h5>${props.precio}</h5>
        <button>Agregar al carrito</button>
    </React.Fragment>
}