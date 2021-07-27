import React, {useState} from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './ItemCountStyle.css'
import {CommonStyles} from '../../../../components/styles/commonStyles'
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles ((theme) => CommonStyles (theme));
    
const BotonesDeCompra = ({price, initial, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    const classes = useStyles();
    
    function removeItem() {
        setQuantity(quantity>initial && quantity-1)
    };
    function addItem() {
        setQuantity(quantity<stock && quantity+1)
    };

    return <>
        <div style={{ display:"flex"}}>
            <button className={classes.button} disabled={quantity===initial} onClick= {removeItem}>{`-`}</button>        
            <h4>{quantity}</h4>
            <button className={classes.button} disabled={quantity===stock} onClick= {addItem}>{`+`}</button>    
        </div>
        {quantity>=stock && <h5>No hay más stock disponible de este producto <SentimentVeryDissatisfiedIcon/></h5>}
        <button className={classes.button} onClick={() => onAdd(quantity)}>{`Agregar al carrito`}<AddShoppingCartIcon/></button>
    </>
}

export const ItemCount = ({initial, stock, onAdd}) => {
    return <BotonesDeCompra initial={initial} stock={stock} onAdd={onAdd}/>
}