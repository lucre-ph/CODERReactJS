import React from 'react';

const style = {textAlign: 'center', color: 'pink', fontWeight: '800'}
export const ItemListContainer = () => {
  const greeting = '¡Hola! Acá va a ir el catálogo';
    return <>
      <p style={style}>{greeting}</p>
    </>
  };