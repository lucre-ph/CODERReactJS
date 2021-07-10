import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Ruteo} from './Router/Ruteo';
import {CartContextProvider} from './Context/CartContext';

const App = () => {
  return <BrowserRouter>
    <CartContextProvider>
      <Ruteo/>
    </CartContextProvider>
  </BrowserRouter>
}

export default App;