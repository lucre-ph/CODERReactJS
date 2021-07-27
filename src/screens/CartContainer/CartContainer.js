import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../Context/CartContext';
import {Cart} from './components/Cart';
import 'firebase/firestore';

const CarritoVacio = () => {
    return <div>
        <h4>{`El carrito está vacío`}</h4>
        <Link to='/'><button>{`Volver a productos`}</button></Link>
    </div>
}

export const CartContainer = () => {
    const {agregadosAlCarrito} = useContext(CartContext);    

    return <section>
        {agregadosAlCarrito.length > 0 ? <Cart/> : <CarritoVacio/>}
    </section>
}