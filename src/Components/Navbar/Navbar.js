import React from 'react';
import {CartWidget} from '../cartWidget/CartWidget';
import {Link} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import {NavbarStyles} from './NavbarStyles';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles ((theme) => NavbarStyles (theme));

const LinksDeNavegacion = () => {
   const classes = useStyles();
   const marca = 'LBakery';
   const categoryId1 = 'Dulces';
   const categoryId2 = 'Salados';

   return <header>
      <nav className={classes.nav}>
         <div className="nav-wrapper">
            <h1 className="brand-logo"><Link to='/'>{marca}</Link></h1>
            <ul className="right">
               <li><Link to='/'>Home</Link></li>
               <li><Link to={`/category/${categoryId1}`}>{categoryId1}</Link></li>
               <li><Link to={`/category/${categoryId2}`}>{categoryId2}</Link></li>
               <li><Link to={`/cart`}><CartWidget/></Link></li>
            </ul>
         </div>
      </nav>
   </header>
}

export const Navbar = () => {
  return <LinksDeNavegacion/>
};