import React, {useState, useEffect} from 'react';
import {ItemDetail} from './components/ItemDetail/ItemDetail';
import {Container} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useParams} from 'react-router-dom';
import {dataBase} from '../../Firebase/firebase';

export const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState([]);  
  const {id} = useParams ();

  useEffect(() => {
    dataBase.collection("items").doc(id).get().then(data => setProductDetail({...data.data(), id: data.id}))
    }, [id])

  return <> 
    {productDetail.length === 0 ? <CircularProgress/> : <Container maxWidth="sm"><ItemDetail key={productDetail.i} {...productDetail}/></Container>}
  </>
};