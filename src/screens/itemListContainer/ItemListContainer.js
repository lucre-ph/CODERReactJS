import React, {useState, useEffect} from 'react';
import {ItemList} from './components/itemList/ItemList';
// import CircularProgress from '@material-ui/core/CircularProgress';

// const style = {textAlign: 'center', color: 'pink', fontWeight: '800'}

const productos = [
  {
    title: 'Cheesecake', 
    img: '/img/cheesecake.jpg', 
    alt: 'torta cheesecake', 
    price: 500, 
    stock: 10,
    id: 1
  },
  {
    title: 'Torta de chocolate', 
    img: '/img/chocolate.jpg', 
    alt: 'torta de chocolate', 
    price: 500, 
    stock: 10,
    id: 2
  },
  {
    title: 'Eclair', 
    img: '/img/eclair.jpg', 
    alt: 'eclair', 
    price: 500, 
    stock: 10,
    id: 3
  }
]

// const loader = () => {
//   return <CircularProgress color="secondary"/>
// }

const promesaCatalogo = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => productos.length > 0 ? resolve (productos) : reject ("Error al obtener los productos. Intenta nuevamente en unos instantes"), 2000);  
  })
};

export const ItemListContainer = () => {
  const [catalogo, setCatalogo] = useState([]);  
  useEffect(() => {
    promesaCatalogo().then(productos => {
      const dataCatalogo = productos
      setCatalogo(dataCatalogo)
    }, [])  
  })

  return <ItemList arrayProductos={catalogo}/>
};