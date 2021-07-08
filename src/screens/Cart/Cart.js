import React from 'react';
import {Link} from 'react-router-dom';

const CarritoVacio = () => {
    return <div>
        <h4>{`El carrito está vacío`}</h4>
        <Link to='/'><button>{`Volver a productos`}</button></Link>
    </div>
}


// {props.CarritoEstaLleno == true ? : }


// const CarritoLleno = () => {
//     return <div>

//     </div>
// }

export const Cart = props => {
    
    return <section>
        <CarritoVacio/>
    </section>
}