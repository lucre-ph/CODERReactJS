import React, {useContext} from 'react';
import {CartContext} from '../../../Context/CartContext';
import 'materialize-css/dist/css/materialize.min.css';

function purchase () {
    alert("¡Compra finalizada!")
}

export const Cart = () => {  
    // const {removeItem} = useContext(CartContext); 
    
    return <section>
        <table className="responsive-table highlight">
            <thead>
                <tr>
                    <th>{` `}</th>
                    <th>{`Producto`}</th>
                    <th>{`Cantidad`}</th>
                    <th>{`Precio`}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Imagen</td>
                    <td>Eclair</td>
                    <td>Cantidad</td>
                    <td>$0.87</td>
                </tr>
            </tbody>
        </table>
        {/* <button onClick={removeItem()}></button> */}
        <button onClick={e=>purchase()}>{`Finalizar compra`}</button>
    </section>
}