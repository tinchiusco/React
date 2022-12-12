//Función auxiliar para generar la orden.



const generateOrderObject = (name, lastName, email, cart, total) => {
    return {
        buyer: {
            name: name,
            lastName: lastName,
            email: email,
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrderObject;