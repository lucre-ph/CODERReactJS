import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../Context/CartContext';
import {Cart} from './components/Cart';
// import firebase from 'firebase/app';
import 'firebase/firestore';
// import {dataBase} from '../../Firebase/firebase';

const CarritoVacio = () => {
    return <div>
        <h4>{`El carrito está vacío`}</h4>
        <Link to='/'><button>{`Volver a productos`}</button></Link>
    </div>
}

// const GenerarOrdenActualizarStock = () => {
//     const {agregadosAlCarrito, precio} = useContext(CartContext);   
//     const updateItems = dataBase.collection("items")//.doc("//ID que saco de firebase//");
//     .where(firebase.firestore.FieldPath.documentId(), 'in', agregadosAlCarrito.map(i => i.item.id));            
        
//     updateItems.get().then(data => {
//         const batch = dataBase.batch();
//         const outOfStock = [];

//         data.docs.forEach((documento, id) => {
//         if (documento.data().stock >= "items"[id].quantity) {
//             batch.update(updateItems, {"stock": documento.data().stock - "items"[id].quantity});
//         } else {
//             outOfStock.push({ ...documento.data(), id: documento.id});
//         }
//         })

//     if (outOfStock.length === 0) {
//         const newOrder = dataBase.collection("orders").doc();  
//         batch.set(newOrder, {
//             // buyer: userInfo,{name, phone, mail}
//             items: [agregadosAlCarrito.id, agregadosAlCarrito.title, agregadosAlCarrito.price], //title, description, price
//             date: firebase.firestore.Timestamp.fromDate(new Date()),
//             total: precio
//         });
    
//     batch.commit().then(() => {
//         dataBase.collection("orders") 
//         .orderBy('date', "desc").limit(1)
//         .get().then(data => console.log(data.docs[0].id))
//         console.log("stock actualizado")
//         });
//     }
//     })
// }

export const CartContainer = () => {
    const {agregadosAlCarrito} = useContext(CartContext);    

    return <section>
        {agregadosAlCarrito.length > 0 ? <Cart/> : <CarritoVacio/>}
    </section>
}