import React, {useContext} from 'react';
import {CartContext} from '../../../Context/CartContext';
import 'materialize-css/dist/css/materialize.min.css';
import {CartStyles} from '../CartStyles';
import {makeStyles} from '@material-ui/core';
import DeleteTwoTone from '@material-ui/icons/DeleteTwoTone';
import {FormularioDeCompra} from './FormularioDeCompra';

const useStyles = makeStyles ((theme) => CartStyles (theme));

function checkout () {
    console.log("Rellenar formulario")
    //Visibilizar formulario/scrollear a formulario?
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
                    <th>{`Precio unitario`}</th>
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
                        <td><button onClick={() => removeItem(producto.item.id)} className="waves-effect waves-light btn"><DeleteTwoTone/>{`Eliminar producto`}</button></td>
                    </tr>
            ))}
            </tbody>
        </table> 
        <span className={classes.total}>{`Precio total: $${precio}`}</span>
        {agregadosAlCarrito.length >1 && <button onClick={() => clearCart()}>{`Vaciar carrito`}</button>}
        <button onClick={e => checkout()}>{`Checkout`}</button>
    </section>
}

export const Cart = () => {  
    return <>
        <ShoppingCartTable/>
        <FormularioDeCompra/>
    </>
}