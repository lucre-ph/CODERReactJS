import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Ruteo} from './Router/Ruteo';
// import {CartContextProvider} from './Context/CartContext';

const App = () => {
  return <BrowserRouter>
      <Ruteo/>
    </BrowserRouter>
}

export default App;


{/* <CartContextProvider>  
</CartContextProvider> */}