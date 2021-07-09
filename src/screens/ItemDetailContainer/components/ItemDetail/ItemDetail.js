import React, {useState, useContext} from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import {ItemCount} from '../ItemCount/ItemCount';
import {CartContext} from '../../../../Context/CartContext'; 


export const ItemDetail = ({...item}) => {    
    const [finalizarCompra, setFinalizarCompra] = useState ()
    const {addItem, isInCart} = useContext(CartContext)

    function onAdd (quantity) {   
        setFinalizarCompra (quantity)
        isInCart(item.id)
        addItem({item: item, quantity: quantity});
    }

    const AgregaronProductos = () => {
        return <>
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