import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {CartWidget} from '../cartWidget/CartWidget';
import './Navbar.css';

export default function ButtonAppBar() {
  const marca = 'LBakery';
  return (
    <div>
      <AppBar position="sticky" className="nav">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <h1>{marca}</h1>
        </Toolbar>
        <CartWidget/>
      </AppBar>
    </div>
  );
}

// const Navbar = props => {
//   const marca = 'LBakery';
//   return <>
//     <nav>
//       <h1>{marca}</h1>
//       <ul>
//         <li><a href=''>Cakes</a></li>
//         <li><a href=''>Cupcakes</a></li>
//         <li><a href=''>Pies</a></li>
//       </ul>
//       <CartWidget/>
//     </nav>
//   </>
// };

// export default Navbar;