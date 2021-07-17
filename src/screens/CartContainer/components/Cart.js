import React, {useContext} from 'react';
import {CartContext} from '../../../Context/CartContext';
import 'materialize-css/dist/css/materialize.min.css';
import {Delete} from '@material-ui/icons/Delete';
import {CartStyles} from '../CartStyles';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles ((theme) => CartStyles (theme));

function purchase () {
    alert("¡Muchas gracias por tu compra!")
}

export const Cart = () => {  
    // const {removeItem} = useContext(CartContext); 
    const classes = useStyles();
    const {clearCart, agregadosAlCarrito} = useContext(CartContext);

    return <section>
        {agregadosAlCarrito.map((producto, i) => {
            return <table className="responsive-table highlight">
                <thead>
                    <tr>
                        <th>{` `}</th>
                        <th>{`Producto`}</th>
                        <th>{`Cantidad`}</th>
                        <th>{`Precio`}</th>
                        <th>{` `}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img className={classes.img} alt={`${producto.item.alt}`} src={`${producto.item.img}`}/></td>
                        <td>{`${producto.item.title}`}</td>
                        <td>{`${producto.quantity}`}</td>
                        <td>{`${producto.item.price}`}</td>
                        <td><button className="waves-effect waves-light btn"><i className="material-icons left"></i>{`Eliminar producto`}</button></td>
                    </tr>
                </tbody>
            </table> 
        })}
        {/* <button onClick={removeItem()}></button> */}
        <button onClick={() => clearCart()}>Vaciar carrito</button>
        <button onClick={e=>purchase()}>{`Finalizar compra`}</button>
    </section>
}