import React, {useContext} from 'react';
import {CartContext} from '../../../Context/CartContext';
import 'materialize-css/dist/css/materialize.min.css';
import {CartStyles} from '../CartStyles';
import {makeStyles} from '@material-ui/core';
import DeleteTwoTone from '@material-ui/icons/DeleteTwoTone';

const useStyles = makeStyles ((theme) => CartStyles (theme));

function purchase () {
    alert("¡Muchas gracias por tu compra!")
}

export const Cart = () => {  
    const classes = useStyles();
    const {clearCart, agregadosAlCarrito} = useContext(CartContext);

    return <section>
        <table className="responsive-table highlight">
            <thead>
                <tr>
                    <th>{` `}</th>
                    <th>{`Producto`}</th>
                    <th>{`Cantidad`}</th>
                    <th>{`Precio`}</th>
                    <th>{`Subtotal`}</th>
                    <th>{` `}</th>
                </tr>
            </thead>
            <tbody>
            {agregadosAlCarrito.map((producto, i) => (
                    <tr>
                        <td><img className={classes.img} alt={`${producto.item.alt}`} src={`${producto.item.img}`}/></td>
                        <td>{`${producto.item.title}`}</td>
                        <td>{`${producto.quantity}`}</td>
                        <td>{`$${producto.item.price}`}</td>
                        <td>{`$${producto.item.price}`}</td>
                        <td><button onClick={() => clearCart()} className="waves-effect waves-light btn"><DeleteTwoTone/>{`Eliminar producto`}</button></td>
                    </tr>
            ))}
            </tbody>
        </table> 
        {/* <button onClick={removeItem()}></button> */}
        <button onClick={() => clearCart()}>Vaciar carrito</button>
        <button onClick={e => purchase()}>{`Finalizar compra`}</button>
    </section>
}