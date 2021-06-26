import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import {EventoCompra} from '../ItemCount/ItemCount'


export const ItemDetail = ({...item}) => {
    return <>
        <Divider/>
        <Card variant="outlined">
            <img alt={item.alt} src={item.img}/>
            <h3>{item.title}</h3>
            <h4>{item.detail}</h4>
            <h5>${item.price}</h5>
            <EventoCompra i={item.i} stock={item.stock}/>
            <Link to='/'><button>Volver atrás</button></Link>
        </Card>
    </>
}