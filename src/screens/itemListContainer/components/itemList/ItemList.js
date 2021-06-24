import React from 'react';
import {Item} from '../item/Item';
import {Grid} from '@material-ui/core';

export const ItemList = props => {
    const {arrayProductos} = props;
    
    return <Grid>
        {arrayProductos.map((producto, i) => { 
            return <Item key={i} {...producto}/>
        })}
    </Grid>
}