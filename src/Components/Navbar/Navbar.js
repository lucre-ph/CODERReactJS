import React from 'react';
import {CartWidget} from '../cartWidget/CartWidget';
import './Navbar.css';
import {Link} from 'react-router-dom';

export const Navbar = () => {
  const marca = 'LBakery';
  const categoryId1 = 'Dulces';
  const categoryId2 = 'Salados'

  return <>
    <nav>
      <h1><Link to='/'>{marca}</Link></h1>
      <ul>
        <li><Link to={`/category/${categoryId1}`}>{categoryId1}</Link></li>
        <li><Link to={`/category/${categoryId2}`}>{categoryId2}</Link></li>
      </ul>
      <CartWidget/>
    </nav>
  </>
};