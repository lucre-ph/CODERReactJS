import React from 'react';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
// import {makeStyles} from '@material-ui/core';
// import {cartWidgetStyles} from './cartWidgetStyles';
import './CartWidget.css'

// const useStyles = makeStyles ((theme) => cartWidgetStyles (theme));

export const CartWidget = () => {
  // const classes = useStyles();
    return <>
      <ShoppingCartTwoToneIcon className="carrito"/>
    </>
  };