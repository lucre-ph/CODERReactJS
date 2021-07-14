import React from 'react';
import {Grid} from '@material-ui/core';

export const Cart = ({productos}) => {  
    const {carrito} = productos
    console.log({carrito})
    return <Grid>
        <h1>{`hay productos en el carrito`}</h1>
    </Grid>
}