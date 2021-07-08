import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import {ItemCount} from '../ItemCount/ItemCount';


export const ItemDetail = ({...item}) => {    
    const [finalizarCompra, setFinalizarCompra] = useState ()

    function onAdd (conteoItems) {   
        setFinalizarCompra (conteoItems)
    }

    const AgregaronProductos = () => {
        <>
            <button><Link to='/Cart'>{`Finalizar compra`}</Link></button>
            <h6>{`Agregaste ${finalizarCompra} unidades de este producto al carrito`}</h6>
        </>
    }

    return <>
        <Divider/>
        <Card variant="outlined">
            <img alt={item.alt} src={item.img}/>
            <h3>{item.title}</h3>
            <h4>{item.detail}</h4>
            <h5>${item.price}</h5> 
            {finalizarCompra ? <AgregaronProductos/> : <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>}
            <Link to='/'><button>Volver atrás</button></Link>
        </Card>
    </>
}