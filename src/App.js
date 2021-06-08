import React from 'react';
import './App.css';
import ButtonAppBar from './components/navbar/Navbar';
import {CartWidget} from './components/cartWidget/CartWidget';
import {ItemListContainer} from './components/itemListContainer/ItemListContainer';

const App = () => {
  return <>
    <ButtonAppBar>    
      <CartWidget/>
    </ButtonAppBar>
    <ItemListContainer/>
  </>
}

export default App;