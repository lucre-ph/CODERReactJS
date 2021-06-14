import React from 'react';
import './App.css';
import ButtonAppBar from './components/navbar/Navbar';
import {ItemListContainer} from './components/itemListContainer/ItemListContainer';

const App = () => {
  return <>
    <ButtonAppBar/>    
    <ItemListContainer/>
  </>
}

export default App;