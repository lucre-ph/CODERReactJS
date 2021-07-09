import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../Context/CartContext';

const CarritoVacio = () => {
    return <div>
        <h4>{`El carrito está vacío`}</h4>
        <Link to='/'><button>{`Volver a productos`}</button></Link>
    </div>
}

const CarritoLleno = () => {
    // MAPEAR ARRAY const {agregadosAlCarrito} = useContext(CartContext); 
    return <ul>
        <li>Proximamente</li>
      {/* <li><img alt={agregadosAlCarrito.alt} src={agregadosAlCarrito.img}/></li>
      <li><h3>{agregadosAlCarrito.title}</h3></li>
      <li><h5>${agregadosAlCarrito.price}</h5></li> */}
    </ul>
}

export const Cart = props => {
    const {agregadosAlCarrito} = useContext(CartContext);    
    
    return <section>
        {agregadosAlCarrito ? <CarritoLleno/> : <CarritoVacio/>}
    </section>
}