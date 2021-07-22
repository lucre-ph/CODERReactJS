import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

    //GUARDADO DE VALORES POR LOCAL STORAGE
    // localStorage.setItem("usuario", usuario);
    // console.log(localStorage.getItem("usuario"));
    // localStorage.setItem("saludo", saludo);
function purchase () {
    //GENERAR ORDEN NUEVA Y MOSTRAR ID
    console.log("muchas gracias por su compra")
}

export const FormularioDeCompra = () => {
    return <section className="row">
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input placeholder="Name" id="first_name" type="text" className="validate"/>
                </div>
                <div className="input-field col s6">
                    <input placeholder="Phone" id="phone" type="number" className="validate"/>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input placeholder="Email" id="email" type="email" className="validate"/>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input placeholder="Email" id="email" type="email" className="validate"/>
                </div>
            </div>
        </form>
        <button onClick={e => purchase()}>{`Finalizar compra`}</button>
    </section>
}