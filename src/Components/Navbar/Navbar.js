import React from 'react';
import {CartWidget} from '../cartWidget/CartWidget';
import './Navbar.css';

const Navbar = props => {
  const marca = 'LBakery';
  return <>
    <nav>
      <h1>{marca}</h1>
      <ul>
        <li>Cakes</li>
        <li>Cupcakes</li>
        <li>Pies</li>
      </ul>
      <CartWidget/>
    </nav>
  </>
};

export default Navbar;