import React from 'react';
import {ItemCount} from '../ItemCount/ItemCount'

// const style = {textAlign: 'center', color: 'pink', fontWeight: '800'}
export const ItemListContainer = props => {
  function onAdd (valor) {
    alert(`Agregaste ${valor} productos al carrito`);
  }
    return <div>
      <ItemCount onAdd={onAdd} stock={7} initial={1}/>
    </div>
  };