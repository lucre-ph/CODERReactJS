//IMPORTS
import React from 'react';
import {ItemList} from '../itemList/ItemList';
import CircularProgress from '@material-ui/core/CircularProgress';

// const style = {textAlign: 'center', color: 'pink', fontWeight: '800'}

//ARRAY DE PRODUCTOS
const productos = [
  {
      title: 'Cheesecake',
      img: '..../public/img/cheesecake.jpg',
      alt: 'torta cheesecake',
      price: 500,
      stock: 10
  },
  {
      title: 'Torta de chocolate',
      img: './chocolate.jpg',
      alt: 'torta de chocolate',
      price: 500,
      stock: 10
  },
  {
      title: 'Eclair',
      img: './eclair.jpg',
      alt: 'eclair',
      price: 500,
      stock: 10
  }
]

//LOADER-SPINNER
const loader = () => {
  return <>
    <CircularProgress color="secondary"/>
  </>
}

//PROMISE PARA CATALOGO
const promesaCatalogo = new Promise ((resolve, reject) => {
  const array = [productos];
  array.length>0 ? resolve(array) : reject ("Error al obtener los productos. Intenta nuevamente en unos instantes");
})

promesaCatalogo.then (result => console.log(result));
promesaCatalogo.catch (error => console.log(error));
promesaCatalogo.finally(() => setTimeout(loader(),2000));


//COMPONENTE CONTENEDOR DE CATALOGO
export const ItemListContainer = props => {
    return <>
      <ItemList/>
    </>
  };