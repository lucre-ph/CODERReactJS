import React from 'react';

export const Item = ({...producto}) => {
    console.log(producto)
    return <React.Fragment>
        <img alt={producto.alt} src={producto.img}/>
        <h3>{producto.title}</h3>
        <h5>${producto.price}</h5>
        <button>Agregar al carrito</button>
    </React.Fragment>
}