import React, {useContext} from 'react';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import {Badge} from '@material-ui/core';
import {CartContext} from '../../Context/CartContext'; 

export const CartWidget = () => {
  const {cantidadProductos} = useContext(CartContext)

  if (cantidadProductos > 0) {
    return <Badge badgeContent={cantidadProductos} color="secondary">
    <ShoppingCartTwoToneIcon/>
  </Badge>}
  else {
    return <ShoppingCartTwoToneIcon/>
  }
};