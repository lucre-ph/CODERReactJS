import React, {useState} from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './ItemCountStyle.css'
import 'materialize-css/dist/css/materialize.min.css'
import {Link} from 'react-router-dom';


//ShowMessage
const ItemCount = props => {
    return <h3>{`${props.stock}`}</h3> 
}
//     function removeItem() {
//         setCount(conteoItems>initial && conteoItems-1)
//     };
//     function addItem() {
//         setCount(conteoItems<stock && conteoItems+1)
//     };
//     return <div className="itemCount">
//         <button disabled={conteoItems===initial} onClick= {removeItem}> - </button>        
//         <h2>{conteoItems}</h2>
//         <button disabled={conteoItems===stock} onClick= {addItem}> + </button>    
//         {conteoItems>=stock && <h5>¡Lo lamentamos! No hay más stock de este producto <SentimentVeryDissatisfiedIcon/></h5>}
//         <span><button className="agregar" onClick={() => onAdd(conteoItems)}>Add to cart <AddShoppingCartIcon/></button></span>
//     </div>
// }
//ComponenteCustomizado


const ButtonsComponent = ({cambiarStock, stock}) => {
    return <>
       <div>
          <button className="waves-effect waves-light btn-small" onClick={() => cambiarStock(stock+1)}>+</button>
          <button className="waves-effect waves-light btn-small" onClick={() => cambiarStock(stock-1)}>-</button>
       </div>
       <span>
          <button><Link to='/Cart'>{`Add to cart`}<AddShoppingCartIcon/></Link></button>
       </span>
    </>
}
//StockContainer
const ItemCountContainer = ({componente: StockHandler}) => {
    const initial = 0;
    const [stock, setStock] = useState(initial);
    const handleStock = valor => setStock(valor);

    return <><ItemCount stock={stock}/>
    <StockHandler stock={stock} cambiarStock={handleStock}/></>;
}

//EventsExample
export const EventoCompra = props => {
    return <ItemCountContainer componente={ButtonsComponent}/>
}