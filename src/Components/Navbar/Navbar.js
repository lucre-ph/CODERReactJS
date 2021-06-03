import React from 'react';

const Navbar = () => {
  const marca = 'LBakery'
  return <>
  <nav>
    <h1>{marca}</h1>
    <ul>
      <li><a href=''>Cakes</a></li>
      <li><a href=''>Cupcakes</a></li>
      <li><a href=''>Pies</a></li>
    </ul>
  </nav>
  </>
};

export default Navbar;