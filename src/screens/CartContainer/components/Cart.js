import React, {useContext} from 'react';
import {CartContext} from '../../../Context/CartContext';
import 'materialize-css/dist/css/materialize.min.css';
import {CartStyles} from '../CartStyles';
import {makeStyles} from '@material-ui/core';
import DeleteTwoTone from '@material-ui/icons/DeleteTwoTone';
import {Alert, AlertTitle} from '@material-ui/lab/';

const useStyles = makeStyles ((theme) => CartStyles (theme));

function purchase () {
    return <Alert severity="success">
        <AlertTitle>"¡Muchas gracias por tu compra!"</AlertTitle>
        <strong>check it out!</strong>
    </Alert>
}

const ShoppingCartTable = () => {
    const classes = useStyles();
    const {clearCart, agregadosAlCarrito, removeItem, precio} = useContext(CartContext);

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
                        <td>{`$${precio}`}</td>
                        <td><button onClick={() => removeItem(producto.item.id)} className="waves-effect waves-light btn"><DeleteTwoTone/>{`Eliminar producto`}</button></td>
                    </tr>
            ))}
            </tbody>
        </table> 
        <span className={classes.total}>{`Precio total: $${precio}`}</span>
        {agregadosAlCarrito.length >1 && <button onClick={() => clearCart()}>{`Vaciar carrito`}</button>}
        <button onClick={e => purchase()}>{`Finalizar compra`}</button>
    </section>
}

export const Cart = () => {  
    return <ShoppingCartTable/>
}