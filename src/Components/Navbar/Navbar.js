import React from 'react';
import {CartWidget} from '../cartWidget/CartWidget';
import './Navbar.css';

const Navbar = props => {
  const marca = 'LBakery';
  return <>
    <nav>
      <h1>{marca}</h1>
      <ul>
        <li><a href=''>Cakes</a></li>
        <li><a href=''>Cupcakes</a></li>
        <li><a href=''>Pies</a></li>
      </ul>
      <CartWidget/>
    </nav>
  </>
};

export default Navbar;