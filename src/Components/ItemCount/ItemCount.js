import React, {useState} from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './ItemCountStyle.css'

export function ItemCount ({stock, initial, onAdd}) {
    const [conteoItems, setCount] = useState(0);
    const addItem = () => {
        setCount(conteoItems+1)
    };
    const removeItem = () => {
        setCount(conteoItems-1)
    };
    return <div className="itemCount">
        <button disabled={conteoItems>=7} onClick= {e => addItem()}>+</button>
        <h2>{conteoItems}</h2>
        {conteoItems>=7 && <h2>¡Lo lamentamos! No hay más stock de este producto <SentimentVeryDissatisfiedIcon/></h2>}
        <button disabled={conteoItems<=0} onClick= {e => removeItem()}>-</button>
        <span><button className="agregar">Add to cart <AddShoppingCartIcon/></button></span>
    </div>
}
//DE NO HABER STOCK AL CLICKEAR EL BOTON SE DEBE EJECUTAR ONADD CON UN 
//NUMERO QUE DEBE SER LA CANTIDAD SELECCIONADA POR EL USUARIO
//adicionalmente tendremos un numero inicial (initial) de cantidad de
//items, de tal modo que si lo invoco del siguiente modo:
//<ItemCount stock="5" initial="1"/>
//deberia ver el contador inicializado en 1 por defecto 