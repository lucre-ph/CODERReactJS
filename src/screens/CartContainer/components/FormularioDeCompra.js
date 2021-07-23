import React, {useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

// function validateEmailFields () {

// }

export const FormularioDeCompra = ({purchase}) => {
    const [buyerData, setBuyerData] = useState ({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        confirmEmail: ''
    })
    
    return <section className="row">
        <form className="col s12">
            <div className="row">
                <div className="input-field col s4">
                    <input placeholder="Name" name='name' onChange={e => setBuyerData({...buyerData, [e.target.name] : e.target.value})} id="first_name" type="text" className="validate"/>
                </div>
                <div className="input-field col s4">
                    <input placeholder="Last Name" name='lastName' onChange={e => setBuyerData({...buyerData, [e.target.name] : e.target.value})} id="last_name" type="text" className="validate"/>
                </div>
                <div className="input-field col s4">
                    <input placeholder="Phone" name='phone' onChange={e => setBuyerData({...buyerData, [e.target.name] : e.target.value})} id="phone" type="number" className="validate"/>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input placeholder="Email" name='email' onChange={e => setBuyerData({...buyerData, [e.target.name] : e.target.value})} id="email" type="email" className="validate"/>
                </div>
                <div className="input-field col s6">
                    <input placeholder="confirm Email" name='confirmEmail' onChange={e => setBuyerData({...buyerData, [e.target.name] : e.target.value})} id="email" type="email" className="validate"/>
                </div>
            </div>
        </form>
        {(buyerData.name.length, buyerData.lastName.length, buyerData.phone.length, buyerData.email.length >= 1) && <button onClick={() => purchase(buyerData)}>{`Finalizar compra`}</button>} 
    </section>
}