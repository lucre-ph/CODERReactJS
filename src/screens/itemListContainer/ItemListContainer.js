import React, {useState, useEffect} from 'react';
import {ItemList} from './components/itemList/ItemList';
import {Container} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useParams} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'
import {dataBase} from '../../Firebase/firebase';

export const ItemListContainer = () => {
  const [catalogo, setCatalogo] = useState([]);  
  const {id} = useParams ();

  useEffect(() => {
    if (id) {dataBase.collection("items").where('category', '==', id).get().then(data => setCatalogo(data.docs.map(documento => ({...documento.data(), id: documento.id}))))
    } else {dataBase.collection("items").get().then(data => setCatalogo(data.docs.map(documento => ({...documento.data(), id: documento.id}))))}
  }, [id]) 
  
  return <>
     {catalogo.length === 0 ? <CircularProgress/> : <main><Container className="row"><ItemList arrayProductos={catalogo}/></Container></main>}
  </>
}