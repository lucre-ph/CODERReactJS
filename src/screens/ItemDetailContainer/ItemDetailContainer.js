import React, {useState, useEffect} from 'react';
import {ItemDetail} from './components/ItemDetail/ItemDetail'


const productos = [
    {
      title: 'Cheesecake', 
      img: '/img/cheesecake.jpg', 
      alt: 'torta cheesecake', 
      detail: 'Porción del más fresco y cremoso cheesecake, con salsa y lluvia de frutos rojos',
      price: 300, 
      stock: 15,
      id: 1
    }
]
  
  const getItems = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => productos.length > 0 ? resolve (productos) : reject ("Error al obtener los productos. Intenta nuevamente en unos instantes"), 2000);  
    })
  };
  
  export const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);  
    useEffect(() => {
      getItems().then(detail => {
        const detalleProducto = detail
        setProductDetail(detalleProducto)
      }, [])  
    })

    return <React.Fragment>
        {productDetail.map((item, i) => {
            return <ItemDetail key={i} {...item}/>})}
    </React.Fragment>
};