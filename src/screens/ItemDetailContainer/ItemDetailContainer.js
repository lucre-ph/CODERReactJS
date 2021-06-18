//IMPORTS
import React from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail'

/*Al iniciar utilizando un efecto de montaje debe llamar a una promise que en 2segs devuelva
un item y lo guarde en un estado*/

//ARRAY DE PRODUCTOS
const productos = [
  {
    title: 'Cheesecake', 
    img: '../public/img/cheesecake.jpg', 
    alt: 'torta cheesecake', 
    detail: ,
    price: 500, 
    stock: 10,
    id: 1
  },
  {
    title: 'Torta de chocolate', 
    img: './chocolate.jpg', 
    alt: 'torta de chocolate', 
    detail: ,
    price: 500, 
    stock: 10,
    id: 2
  },
  {
    title: 'Eclair', 
    img: './eclair.jpg', 
    alt: 'eclair', 
    detail: ,
    price: 500, 
    stock: 10,
    id: 3
  }
]

//LOADER-SPINNER
const loader = () => {
  return <>
    <CircularProgress color="secondary"/>
  </>
}

//PROMISE PARA CATALOGO, USO DE SET TIME OUT
const promesaCatalogo = new Promise ((resolve, reject) => {
  setTimeout((resolve([productos]), 2000));  
  [productos].length<0 && reject ("Error al obtener los productos. Intenta nuevamente en unos instantes");
})

export const ItemList = arrayProductos => {
    arrayProductos.map((producto, i) => 
        <Item titulo={producto.title} precio={producto.price} img={producto.img} alt={producto.alt} i={i}/>);
}

//COMPONENTE CONTENEDOR DE CATALOGO
export const ItemListContainer = () => {
  const [catalogo, setCatalogo] = useState([]);
  const ejecutarCatalogo = () => {
    promesaCatalogo().then(() => {
    const arrayCatalogo = [productos];
    setCatalogo(arrayCatalogo);
    [catalogo].length<0 && promesaCatalogo().catch (error => console.log(error));
  })
  return <>
    <ItemDetail props={[catalogo]}/>
  </>
  }
  useEffect(() => {ejecutarCatalogo();}, [])  
  [catalogo].length===0 && loader();
};