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
//     const {clearCart} = useContext(CartContext);
//     // const {removeItem, agregadosAlCarrito} = useContext(CartContext);         

//     return <div/>
//         {/* {agregadosAlCarrito.map((producto, i) => { 
//             return <ul>
//                 <li>{`producto.title`}</li>
//                 <li>${`producto.price`}</li> 
//                 <li><button onClick={() => removeItem()}>Eliminar producto</button></li>
//             </ul>
//         })} */}
//         <li><button onClick={() => clearCart()}>Vaciar carrito</button></li>
//     </div>
// }

export const CartContainer = () => {
    const {agregadosAlCarrito} = useContext(CartContext);    
    
    return <section>
        {agregadosAlCarrito.length > 0 ? <Cart productos={agregadosAlCarrito}/> : <CarritoVacio/>}
    </section>
}