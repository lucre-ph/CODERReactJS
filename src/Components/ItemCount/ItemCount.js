import React, {useState} from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './ItemCountStyle.css'

export function ItemCount ({stock, initial, onAdd}) {
    const [conteoItems, setCount] = useState(initial);
    function removeItem () {
        setCount(conteoItems>initial && conteoItems-1)
    };
    function addItem() {
        setCount(conteoItems<stock && conteoItems+1)
    };
    return <div className="itemCount">
        <button disabled={conteoItems===initial} onClick= {removeItem}> - </button>        
        <h2>{conteoItems}</h2>
        <button disabled={conteoItems===stock} onClick= {addItem}> + </button>    
        {conteoItems>=stock && <h2>¡Lo lamentamos! No hay más stock de este producto <SentimentVeryDissatisfiedIcon/></h2>}
        <span><button className="agregar" onClick={() => onAdd(conteoItems)}>Add to cart <AddShoppingCartIcon/></button></span>
    </div>
}