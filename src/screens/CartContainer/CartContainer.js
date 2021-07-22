import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../Context/CartContext';
import {Cart} from './components/Cart';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import {dataBase} from '../../Firebase/firebase';

const CarritoVacio = () => {
    return <div>
        <h4>{`El carrito está vacío`}</h4>
        <Link to='/'><button>{`Volver a productos`}</button></Link>
    </div>
}

// const generarOrden = () => {}

// const actualizarStock = () => {}

                    //     const itemsToUpdate = dataBase.collection("items")
                    //       .where(firebase.firestore.FieldPath.documentId(), 'in', items.map(i => i.item.id));
                    
                    //     itemsToUpdate.get().then(querySnapshot => {
// const batch = dataBase.batch();
// const outOfStock = [];
                    
                    //       querySnapshot.docs.forEach((docSnapshot, idx) => {
                    //         if (docSnapshot.data().stock >= items[idx].quantity) {
                    //           batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - items[idx].quantity });
                    //         } else {
                    //           outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
                    //         }
                    //       })
                    
// if (outOfStock.length === 0) {
//     const newOrder = dataBase.collection("orders").doc();  //CREA UN DOCUMENTO DENTRO DE LA COLECCION ITEM Y AUTOGENERA EL ID con .doc()
//     batch.set(newOrder, {
//         date: firebase.firestore.Timestamp.fromDate(new Date())
//         buyer: userInfo,
//         items: agregadosAlCarrito, //title, description, price
//         total: precio
// };
                    //         })
                    //         batch.commit().then(() => {
                    //           dataBase.collection("orders") 
                    //             .orderBy('date', "desc").limit(1)
                    //             .get().then(querySnapshot => console.log(querySnapshot.docs[0].id))
                    //         });
                    //       }
                    //     }
                    //     )
/*
const updateItem =dataBase.collection("items").doc("fsrs546+455");
batch.update(updateItem, {"price": '100'});

batch.commit().then(dat =>
    console.log(dat, '¿que valor tiene dat?)
});    
*/

/*ACTUALIZAR STOCK DE COMPRADOS
const item = dataBase.collection("items").doc(id);

return item.update({
    stock: 
})
    .then(()=> {
        console.log("stock actualizado");
    })
    .catch
    .finally   ...........*/

// const orders = dataBase.collection('orders');
// const newOrder = {
//     buyer: userInfo,
//     items: cart,
//     total: price()
// };

////creacion----> orders.add(newOrder).then(({id}) => {
            //     setOrderId(id)}) //SUCCESS
            // }).catch(err => {
            //     setError(err); //ERROR
            // }).finally(() => {
            //     setLoading(false);
            // });

export const CartContainer = () => {
    const {agregadosAlCarrito} = useContext(CartContext);    
     
    return <section>
        {agregadosAlCarrito.length > 0 ? <Cart/> : <CarritoVacio/>}
    </section>
}