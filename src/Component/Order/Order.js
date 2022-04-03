import React from 'react';
import "./Order.css"
const Order = ({cart}) => {
    let price = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity
        price = price + product.price * product.quantity
        shipping = shipping + product.shipping 
    }
    const tax =parseFloat((price * 10/100).toFixed(2));
    const total = price + shipping + tax
     return (
        <div className='order'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ৳{price}</p>
            <p>Total Shipping: ৳{shipping}</p>
            <p>Tax: ৳{tax}</p>
            <h5>Grand Total: ৳{total}</h5>
        </div>
    );
};

export default Order;