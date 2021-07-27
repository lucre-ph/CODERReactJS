import React from 'react';
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom';
import {CommonStyles} from '../../../../components/styles/commonStyles';
import 'materialize-css/dist/css/materialize.min.css';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles ((theme) => CommonStyles (theme));

export const Item = ({...producto}) => {
   const classes = useStyles();

   return <Card className="col s4 card darken-1">
      <Link to={`/item/${producto.id}`}><img className={classes.img} alt={`${producto.alt}`} src={`${producto.img}`}/></Link>
      <h3 className="flow-text">{`${producto.title}`}</h3>
      <h5 className="flow-text">{`$${producto.price}`}</h5>
      <Link to={`/item/${producto.id}`}><button className={classes.button}>{`Agregar al carrito`}</button></Link>
   </Card>
}