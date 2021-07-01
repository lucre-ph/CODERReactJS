import {productos} from './data';

export const promesaCatalogo = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => productos.length > 0 ? resolve (productos) : reject ("Error al obtener los productos. Intenta nuevamente"), 2000);
    })
}