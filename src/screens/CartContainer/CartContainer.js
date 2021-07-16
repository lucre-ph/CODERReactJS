import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../Context/CartContext';
import {Cart} from './components/Cart'

const CarritoVacio = () => {
    return <div>
        <h4>{`El carrito está vacío`}</h4>
        <Link to='/'><button>{`Volver a productos`}</button></Link>
    </div>
}

// const CarritoLleno = () => {
//     const {clearCart, agregadosAlCarrito} = useContext(CartContext);
//     return <div>
//         {agregadosAlCarrito.map((producto, i) => { 
//             return <div><h1>{producto.item.title}</h1>
//                 <h1>{producto.quantity}</h1>
//                 <h1>{producto.item.price}</h1>
//                 <img alt={producto.item.alt} src={producto.item.img}/>
//             </div>
//         })}
//         <button onClick={() => clearCart()}>Vaciar carrito</button>
//     </div>
// }

export const CartContainer = () => {
    const {agregadosAlCarrito} = useContext(CartContext);    
    
    return <section>
        {agregadosAlCarrito.length > 0 ? <Cart productos={agregadosAlCarrito}/> : <CarritoVacio/>}
    </section>
}