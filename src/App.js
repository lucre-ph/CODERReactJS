import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {CartWidget} from './components/cartWidget/CartWidget';
import {ItemListContainer} from './components/itemListContainer/ItemListContainer';

const App = () => {
  return <>
    <Navbar>    
      <CartWidget/>
    </Navbar>
    <ItemListContainer/>
  </>
}

export default App;