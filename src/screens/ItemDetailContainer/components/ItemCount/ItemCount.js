import React, {useState, useContext} from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './ItemCountStyle.css'
import 'materialize-css/dist/css/materialize.min.css'
import {CartContext} from '../../../../Context/CartContext'; 


const Botones = ({item, initial, stock, onAdd, value}) => {
    console.log(item)
    const [conteoItems, setConteoItems] = useState(initial)
    const {addCartItem, removeCartItem} = useContext(CartContext)

    function removeItem() {
        setConteoItems(conteoItems>initial && conteoItems-1)
    };
    function addItem() {
        setConteoItems(conteoItems<stock && conteoItems+1)
    };
    
    return <>
            <div style={{ display:"flex" }}>
                <button className="waves-effect waves-light btn-small" disabled={conteoItems===initial} onClick= {removeItem}> - </button>        
                <h4>{conteoItems}</h4>
                <button className="waves-effect waves-light btn-small" disabled={conteoItems===stock} onClick= {addItem}> + </button>    
            </div>
        {conteoItems>=stock && <h5>No hay más stock disponible de este producto <SentimentVeryDissatisfiedIcon/></h5>}
        <button onClick={() => onAdd(conteoItems)}> Add to cart <AddShoppingCartIcon/></button>
    </>
}

export const ItemCount = ({item, initial, stock, onAdd, ...value}) => {
    return <div>
        <Botones item={item} initial={initial} stock={stock} onAdd={onAdd} value={value}/>
    </div>
}