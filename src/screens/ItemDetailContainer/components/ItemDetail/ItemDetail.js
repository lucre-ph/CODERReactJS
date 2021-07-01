import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import {ItemCount} from '../ItemCount/ItemCount';


export const ItemDetail = ({...item}) => {    
    const [finalizarCompra, setFinalizarCompra] = useState (false)

    function onAdd (conteoItems) {   
        setFinalizarCompra (true)
        console.log(conteoItems)
    }

    return <>
        <Divider/>
        
        <Card variant="outlined">
            <img alt={item.alt} src={item.img}/>
            <h3>{item.title}</h3>
            <h4>{item.detail}</h4>
            <h5>${item.price}</h5> 
            {finalizarCompra ? <><button><Link to='/Cart'>{`Finalizar compra`}</Link></button><h6>{`Agregaste unidades de este producto al carrito`}</h6></> : <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>}
            <Link to='/'><button>Volver atrás</button></Link>
        </Card>
    </>
}


