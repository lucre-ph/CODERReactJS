import React from 'react';

const style = {textAlign: 'center', color: 'pink', fontWeight: '800'}
export const ItemListContainer = props => {
  const {greeting} = props;
    return <>
      <p style={style}>{greeting}</p>
    </>
  };