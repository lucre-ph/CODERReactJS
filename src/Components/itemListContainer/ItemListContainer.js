import React from 'react';
import {ItemCount} from '../ItemCount/ItemCount'

const style = {textAlign: 'center', color: 'pink', fontWeight: '800'}
export const ItemListContainer = props => {
  const {greeting} = props;
    return <div>
      <p style={style}>{greeting}</p>
      {<ItemCount/>}
    </div>
  };