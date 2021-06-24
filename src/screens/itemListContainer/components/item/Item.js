import React from 'react';
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom';

export const Item = ({...producto}) => {

   return <Card>
      <Link to={`/item/${producto.id}`}><img alt={producto.alt} src={producto.img}/></Link>
       <h3>{producto.title}</h3>
       <h5>${producto.price}</h5>
       <button>Agregar al carrito</button>
   </Card>
}