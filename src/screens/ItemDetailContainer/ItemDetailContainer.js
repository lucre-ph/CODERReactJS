import React, {useState, useEffect} from 'react';
import {ItemDetail} from './components/ItemDetail/ItemDetail';
import {Container} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useParams} from 'react-router-dom';
import {promesaCatalogo} from '../../Services/promises';
// import {dataBase} from '../../Firebase/firebase';

export const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState([]);  
  const {id} = useParams ();

//   export const promesaCatalogo = () => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => productos.length > 0 ? resolve (productos) : reject ("Error al obtener los productos. Intenta nuevamente"), 2000);
//     })
// }
  // useEffect(() => {
  //   const itemCollection = dataBase.collection("items");
  //   itemCollection.get().then((querySnapshot) => {
  //     setProductDetail(querySnapshot.docs.where)(doc => doc.data.id == id)
  //   })
  // })

  useEffect(() => {
    promesaCatalogo().then (items => {
      setProductDetail(items.find(item => item.id == id))
    })  
  }, [id])

  return <> 
    {productDetail.length === 0 ? <CircularProgress/> : <Container maxWidth="sm"><ItemDetail key={productDetail.i} {...productDetail}/></Container>}
  </>
};