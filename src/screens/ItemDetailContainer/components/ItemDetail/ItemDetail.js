import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {ItemCount} from '../ItemCount/ItemCount';
import {CartContext} from '../../../../Context/CartContext'; 


export const ItemDetail = ({...item}) => {    
    const [finalizarCompra, setFinalizarCompra] = useState ()
    const {addItem} = useContext(CartContext)

    function onAdd (quantity) {   
        setFinalizarCompra (quantity)
        addItem({item: item, quantity: quantity});
    }

    const Card = () => {
        return <>
            <img alt={`${item.alt}`} src={`${item.img}`}/>
            <h4>{`${item.title}`}</h4>
            <h5>{`${item.detail}`}</h5>
            <h6>{`Precio unitario: $${item.price}`}</h6>
            {finalizarCompra ? <AgregaronProductos/> : <ItemCount price={item.price} initial={1} stock={item.stock} onAdd={onAdd}/>}
            <Link to='/'><button>{`Volver`}</button></Link>
        </>
    }

    const AgregaronProductos = () => {
        return <button>
            <Link to='/Cart'>{`Ir al carrito`}</Link>
        </button>
    }

    return <Card/>
}