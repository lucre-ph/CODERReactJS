import React, {useState} from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ReactCSSTransitionGroup from 'react-transition-group';
import './ItemCountStyle.css'
import 'materialize-css/dist/css/materialize.min.css'
import {Link} from 'react-router-dom';


const ItemCount = props => {
    return <h3>{`${props.stock}`}</h3> 
}

//FALTA INHABILITAR LINK HASTA QUE EL STOCK SEA DISTINTO DE 0(initial)
const ButtonsComponent = ({cambiarStock, stock}) => {
    return <>
       <div>
          <button className="waves-effect waves-light btn-small" onClick={() => {        cambiarStock(stock+1)}}>+</button>
          <button className="waves-effect waves-light btn-small" onClick={() => {        cambiarStock(stock-1)}}>-</button>
       </div>
       <span>
          {/* <button className="agregar" onClick={() => onAdd(conteoItems)}>Add to cart <AddShoppingCartIcon/></button> */}
          <button disabled={true}><Link to='/Cart' onClick={e => e.preventDefault()} style={{ pointerEvents: 'none' }}>{`Finalizar compra`}<AddShoppingCartIcon/></Link></button>
       </span>
    </>
}

const ItemCountContainer = ({componente: StockHandler}) => {
    const initial = 0;
    const [stock, setStock] = useState(initial);
    const handleStock = valor => setStock(valor);

    return <><ItemCount stock={stock}/>
    <StockHandler stock={stock} cambiarStock={handleStock}/></>;
}

export const EventoCompra = ({stock, i}) => {
    console.log(stock)
    console.log(i)
    return <ItemCountContainer componente={ButtonsComponent}/>
}



//ITEMCOUNT PRIMER ENTREGA -VIEJO
// export function ItemCount ({stock, initial, onAdd}) {
//     const [conteoItems, setCount] = useState(initial);
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
//         {conteoItems>=stock && <h2>¡Lo lamentamos! No hay más stock de este producto <SentimentVeryDissatisfiedIcon/></h2>}
//         <span><button className="agregar" onClick={() => onAdd(conteoItems)}>Add to cart <AddShoppingCartIcon/></button></span>
//     </div>
// }