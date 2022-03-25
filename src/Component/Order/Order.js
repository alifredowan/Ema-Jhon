import React from 'react';

const Order = (props) => {
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Total: {props.cart.length}</p>
        </div>
    );
};

export default Order;