//IMPORTS
import React from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail'
import CircularProgress from '@material-ui/core/CircularProgress';

/*Al iniciar utilizando un efecto de montaje debe llamar a una promise que en 2segs devuelva
un item y lo guarde en un estado*/

//ARRAY DE PRODUCTOS
const productos = [
  {
    title: 'Cheesecake', 
    img: '../public/img/cheesecake.jpg', 
    alt: 'torta cheesecake', 
    detail: 'Porción de cheesecake aterciopelado',
    price: 500, 
    stock: 10,
    id: 1
  },
  {
    title: 'Torta de chocolate', 
    img: './chocolate.jpg', 
    alt: 'torta de chocolate', 
    detail: 'Porción de torta de chocolate húmeda',
    price: 500, 
    stock: 10,
    id: 2
  },
  {
    title: 'Eclair', 
    img: './eclair.jpg', 
    alt: 'eclair', 
    detail: 'Unidad de Eclair',
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
const promesaDetalles = new Promise ((resolve, reject) => {
  setTimeout((resolve([productos]), 2000));  
  [productos].length<0 && reject ("Error al obtener los productos. Intenta nuevamente en unos instantes");
})


//COMPONENTE CONTENEDOR DE CATALOGO
export const ItemDetailContainer = () => {
    arrayProductos.map((producto, i) => 
    <Item titulo={producto.title} precio={producto.price} img={producto.img} alt={producto.alt} detail={producto.detail} i={i}/>);
  const [catalogo, setCatalogo] = useState([]);
  
};

const ejecutarCatalogo = () => {
    
    return <>
      <ItemDetail props={[catalogo]}/>
    </>
    }
    useEffect(() => {promesaDetalles().then(() => {
      const arrayProductos = [productos];
      setCatalogo(arrayProductos);
      [catalogo].length<0 && promesaDetalles().catch (error => console.log(error));
    });}, [])  
    
    [catalogo].length===0 && loader();