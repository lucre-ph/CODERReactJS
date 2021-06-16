//IMPORTS
import React from 'react';

export const Item = ({Productos, i}) => {
    const producto = Productos;
    return <React.Fragment key= {i}>
        <img alt={[producto].alt} src={producto.imagen}></img>
        <h4>{producto.titulo}</h4>
        <h2>{producto.precio}</h2>
        <button>Agregar al carrito</button>
    </React.Fragment>
}