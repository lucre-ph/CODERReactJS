import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

export const ItemDetail = ({...item}) => {
    return <>
        <Divider/>
        <h3>Desafío entrega 7</h3>
        <Card>
            <img alt={item.alt} src={item.img}/>
            <h3>{item.title}</h3>
            <h4>{item.detail}</h4>
            <h5>${item.price}</h5>
            <button>Agregar al carrito</button>
        </Card>
    </>
}