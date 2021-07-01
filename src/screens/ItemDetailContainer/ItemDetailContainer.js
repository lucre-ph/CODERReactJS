import React, {useState, useEffect} from 'react';
import {ItemDetail} from './components/ItemDetail/ItemDetail';
import {Container} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useParams} from 'react-router-dom';
import {promesaCatalogo} from '../../Services/promises';


  export const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);  
    const {id} = useParams ();

    useEffect(() => {
      promesaCatalogo().then (items => {
        setProductDetail(items.find(item => item.id == id))
      })  
    }, [id])


    return <> 
      {productDetail.length === 0 ? <CircularProgress/> : <Container maxWidth="sm"><ItemDetail key={productDetail.i} {...productDetail}/></Container>}
    </>
};