import React from 'react';
import {ItemListContainer} from '../screens/itemListContainer/ItemListContainer';
import {ItemDetailContainer} from '../screens/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Navbar} from '../components/navbar/Navbar'

export const Ruteo = () => {
   return <BrowserRouter>
      <Navbar/>
      <Switch>
         <Route exact path='/'>
            <ItemListContainer/>
         </Route>
         <Route path='/category/:id'>
            <ItemListContainer/>
         </Route>
         <Route path='/item/:id'>
            <ItemDetailContainer/>
         </Route>
      </Switch>
   </BrowserRouter>
}