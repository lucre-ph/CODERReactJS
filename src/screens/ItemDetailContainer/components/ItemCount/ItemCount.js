import React, {useState} from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './ItemCountStyle.css'
import 'materialize-css/dist/css/materialize.min.css'

const Botones = ({initial, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    function removeItem() {
        setQuantity(quantity>initial && quantity-1)
    };
    function addItem() {
        setQuantity(quantity<stock && quantity+1)
    };

    return <>
            <div style={{ display:"flex" }}>
                <button className="waves-effect waves-light btn-small" disabled={quantity===initial} onClick= {removeItem}>{`-`}</button>        
                <h4>{quantity}</h4>
                <button className="waves-effect waves-light btn-small" disabled={quantity===stock} onClick= {addItem}>{`+`}</button>    
            </div>
        {quantity>=stock && <h5>No hay más stock disponible de este producto <SentimentVeryDissatisfiedIcon/></h5>}
        <button onClick={() => onAdd(quantity)}>{`Add to cart`}<AddShoppingCartIcon/></button>
    </>
}

export const ItemCount = ({initial, stock, onAdd}) => {
    return <div>
        <Botones initial={initial} stock={stock} onAdd={onAdd}/>
    </div>
}