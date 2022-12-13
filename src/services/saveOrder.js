import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import generateOrderObject from "./generateOrderObject";

export const saveOrder = async (firstName, lastName, email, products, total) => {
    try {
        const generatedOrder = generateOrderObject(
            firstName,
            lastName,
            email,
            products,
            total
        );
    
        const productOutOfStock = [];
        const productsInFirebase = [];
        //Chequear el stock de los productos en el carrito
        for (const productInCart of products) {
            const docRef = doc(db, "games", productInCart.id);
            const docSnap = await getDoc(docRef);
            const productInFirebase = { ...docSnap.data(), id: docSnap.id };
            productsInFirebase.push(productInFirebase);
            if (productInCart.quantity > productInFirebase.quantity)
                productOutOfStock.push(productInCart);
        }
    
        console.log(productOutOfStock);
        console.log(productsInFirebase);
    
        if (productOutOfStock.length === 0) {
            //Disminuir el stock existente
            console.log(products);
    
            for (const productInCart of products) {
                const productInFirebase = productsInFirebase.find(
                    (product) => product.id === productInCart.id
                );
                const productRef = doc(
                    db,
                    "games",
                    productInCart.id
                );
                // Actualizo el stock del producto
                await updateDoc(productRef, {
                    quantity:
                        productInFirebase.quantity -
                        productInCart.quantity,
                });
            }
    
            //Generar la orden
            const docRef = await addDoc(
                collection(db, "orders"),
                generatedOrder
            );
            alert(
                `Order generated with ID: ${docRef.id}`
            );
        } else {
            let mensaje = "";
            for (const product of productOutOfStock) {
                const productInFirebase = productsInFirebase.find(
                    (productFirebase) => productFirebase.id === product.id
                );
                
                mensaje += `${product.name}, stock: ${productInFirebase.quantity}, quantity: ${product.quantity}\n`;
            }
            alert(`Out of products stock: \n${mensaje}`);
        }
    } catch (error) {
        console.log(error);
    }
}
