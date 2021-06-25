import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import {ItemCount} from '../ItemCount/ItemCount'

/*Debes lograr separar la responsabilidad del count, del itemdetail y esperar los eventos
de agregado emitirdos por el itemcount. cuando itemcount emita un evento onadd almacenaras
ese valor en un estado interno del itemdetail para hacer desaparecer el itemcount.
cuando el estado interno de itemdetail tenga la cantidad d eitems solicitados mostrar un boton
que diga "terminar mi compra". el boton debe poder navegar a un componente vacio por el momento
en la ruta '/cart'
ejemplo inicial:
function itemdetail ({item}) {
    on add (quantitytoadd) {
        //hemos recibido un evento del itemcount
    }
    return <>
    .............
    <itemcount> //configura las props de itemcount
    <button> termina tu compra </button> //oculto hasta que el usuario seleccione la cantidad 
    y cliquee en comprar
    </>;
    //utilizar dentro de itemdetail el count
}*/


export const ItemDetail = ({...item}) => {
    return <>
        <Divider/>
        <Card variant="outlined">
            <img alt={item.alt} src={item.img}/>
            <h3>{item.title}</h3>
            <h4>{item.detail}</h4>
            <h5>${item.price}</h5>
            <ItemCount/>
            <Link to='/'><button>Volver atrás</button></Link>
        </Card>
    </>
}