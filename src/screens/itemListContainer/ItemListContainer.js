import React, {useState, useEffect} from 'react';
import {ItemList} from './components/itemList/ItemList';
import {Container} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useParams} from 'react-router-dom';
import {promesaCatalogo} from '../Services/promises';


export const ItemListContainer = () => {
  const [catalogo, setCatalogo] = useState([]);  
  const {id} = useParams ();

  useEffect(() => {
    promesaCatalogo().then(items => {
      console.log(items)
      const dataCatalogoFiltrada = items.filter(item => item.id === id);
      setCatalogo(dataCatalogoFiltrada)
    })     
  }, [id])  

  console.log(catalogo)
  
  
  return <>
  {catalogo.length === 0 ? <CircularProgress/> : <Container maxWidth="sm"><ItemList arrayProductos={catalogo}/></Container>}
  </>
}