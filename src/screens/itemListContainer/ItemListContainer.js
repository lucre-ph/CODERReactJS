import React, {useState, useEffect} from 'react';
import {ItemList} from './components/itemList/ItemList';
import {Container} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useParams} from 'react-router-dom';
import {promesaCatalogo} from '../../Services/promises';
import 'materialize-css/dist/css/materialize.min.css'
// import {dataBase} from '../../Firebase/firebase';

export const ItemListContainer = () => {
  const [catalogo, setCatalogo] = useState([]);  
  const {id} = useParams ();


  // useEffect(() => {
  //   const itemCollection = dataBase.collection("items");
  //   itemCollection.get().then((querySnapshot) => {
  //     setCatalogo(querySnapshot.docs.find)(doc => doc.data.id == id)
  //   })
  // }, [id])

  useEffect(() => {
    promesaCatalogo().then(items => {
      id === undefined ? setCatalogo(items) : setCatalogo(items.filter(item => item.category === id))
    })     
  }, [id])  
  
  
  return <>
     {catalogo.length === 0 ? <CircularProgress/> : <Container className="row"><ItemList arrayProductos={catalogo}/></Container>}
  </>
}