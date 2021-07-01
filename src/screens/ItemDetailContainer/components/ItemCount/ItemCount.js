import React, {useState} from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ReactCSSTransitionGroup from 'react-transition-group';
import './ItemCountStyle.css'
import 'materialize-css/dist/css/materialize.min.css'
import {Link} from 'react-router-dom';

const Botones = ({initial, stock, onAdd}) => {
    const [conteoItems, setConteoItems] = useState(initial)
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
        {conteoItems>=stock && <h5>¡Lo lamentamos! No hay más stock de este producto <SentimentVeryDissatisfiedIcon/></h5>}
        <button onClick={() => onAdd(conteoItems)}> Add to cart <AddShoppingCartIcon/></button>
    </>
}

export const ItemCount = ({initial, stock, onAdd}) => {
    return <div>
        <Botones initial={initial} stock={stock} onAdd={onAdd}/>
    </div>
}