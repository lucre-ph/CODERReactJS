import React, {useContext} from 'react';
import {CartContext} from '../../../Context/CartContext';
import '../CartStyles.css'
import {makeStyles} from '@material-ui/core';
import DeleteTwoTone from '@material-ui/icons/DeleteTwoTone';
import {FormularioDeCompra} from './FormularioDeCompra';
import firebase from 'firebase/app';
import {dataBase} from '../../../Firebase/firebase';
import {CommonStyles} from '../../../components/styles/commonStyles'

const useStyles = makeStyles ((theme) => CommonStyles (theme));

const ShoppingCartTable = () => {
    const classes = useStyles();
    const {clearCart, agregadosAlCarrito, removeItem, precio} = useContext(CartContext);

    return <section>
        <table className="responsive-table highlight">
            <thead>
                <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {agregadosAlCarrito.map((producto, i) => (
                    <tr>
                        <td><img style={{ width: '4rem', heigth: '5rem'}} alt={`${producto.item.alt}`} src={`${producto.item.img}`}/></td>
                        <td>{`${producto.item.title}`}</td>
                        <td>{`${producto.quantity}`}</td>
                        <td>{`$${producto.item.price}`}</td>
                        <td><button onClick={() => removeItem(producto.item.id)} className={classes.button}><DeleteTwoTone/></button></td>
                    </tr>
            ))}
            </tbody>
        </table> 
        <span style={{ left: '20%'}}>{`Precio total: $${precio}`}</span>
        {agregadosAlCarrito.length >1 && <button className={classes.button} onClick={() => clearCart()}>{`Vaciar carrito`}</button>}
    </section>
}

export const Cart = () => {   
    const {agregadosAlCarrito, precio, clearCart} = useContext(CartContext);
    
    async function purchase (buyerData) {
        const newOrder = await dataBase.collection("orders")  

        const order = {
            buyer: buyerData,
            items: agregadosAlCarrito,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: precio,
        }

        await newOrder.add(order).then(buyerData => console.log(buyerData.id))
        alert("muchas gracias por su compra!");
        clearCart();
    }

    return <>
        <ShoppingCartTable/>
        <FormularioDeCompra purchase={purchase}/>
    </>
}