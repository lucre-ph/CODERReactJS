import React from 'react';
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'

export const Item = ({...producto}) => {
   
   return <Card className="col s4 card darken-1">
      <Link to={`/item/${producto.id}`}><img alt={producto.alt} src={producto.img}/></Link>
      <h3>{producto.title}</h3>
      <h5>${producto.price}</h5>
      <Link to={`/item/${producto.id}`}><button className="waves-effect waves-light btn-small">Agregar al carrito</button></Link>
   </Card>
}