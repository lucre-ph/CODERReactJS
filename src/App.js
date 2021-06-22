import React from 'react';
import './App.css';
import ButtonAppBar from './components/navbar/Navbar';
import {ItemListContainer} from './screens/itemListContainer/ItemListContainer';
import {ItemDetailContainer} from './screens/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  return <>
    <ButtonAppBar/>    
    <ItemListContainer/>
    <ItemDetailContainer/>
  </>
}

export default App;