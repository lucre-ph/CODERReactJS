import React from 'react';
import Card from '@material-ui/core/Card';

export const Item = ({...producto}) => {
    return <Card>
        <img alt={producto.alt} src={producto.img}/>
        <h3>{producto.title}</h3>
        <h5>${producto.price}</h5>
        <button>Agregar al carrito</button>
    </Card>
}