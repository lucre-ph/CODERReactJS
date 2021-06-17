//IMPORTS
import React, {useState, useEffect} from 'react';
import {ItemList} from '../itemList/ItemList';
import CircularProgress from '@material-ui/core/CircularProgress';

// const style = {textAlign: 'center', color: 'pink', fontWeight: '800'}

//ARRAY DE PRODUCTOS
const productos = [
  {
    title: 'Cheesecake', 
    img: '../public/img/cheesecake.jpg', 
    alt: 'torta cheesecake', 
    price: 500, 
    stock: 10,
    id: 1
  },
  {
    title: 'Torta de chocolate', 
    img: './chocolate.jpg', 
    alt: 'torta de chocolate', 
    price: 500, 
    stock: 10,
    id: 2
  },
  {
    title: 'Eclair', 
    img: './eclair.jpg', 
    alt: 'eclair', 
    price: 500, 
    stock: 10,
    id: 3
  }
]

//LOADER-SPINNER
const loader = () => {
  return <>
    <CircularProgress color="secondary"/>
  </>
}

//PROMISE PARA CATALOGO, USO DE SET TIME OUT
const promesaCatalogo = new Promise ((resolve, reject) => {
  setTimeout((resolve([productos]), 2000));  
  [productos].length<0 && reject ("Error al obtener los productos. Intenta nuevamente en unos instantes");
})


//COMPONENTE CONTENEDOR DE CATALOGO
export const ItemListContainer = () => {
  const [catalogo, setCatalogo] = useState([]);
  const ejecutarCatalogo = () => {
    promesaCatalogo().then(() => {
    const arrayCatalogo = [productos];
    setCatalogo(arrayCatalogo);
    [catalogo].length<0 && promesaCatalogo().catch (error => console.log(error));
  })
  return <>
    <ItemList propsProductos={[catalogo]}/>
  </>
  }
  useEffect(() => {ejecutarCatalogo();}, [])  
  [catalogo].length===0 && loader();
};